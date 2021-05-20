// custom js

Vue.filter("abbrAddr", function (addr) {
  console.log(addr);
  if (addr) {
    return addr.substring(0, 6) + "..." + addr.substring(addr.length - 4);
  }
  return "";
});

$(function () {
  let nav = $("#navItems");
  nav
    .find('a.nav-link[href="' + location.pathname + '"]')
    .parent()
    .addClass("active")
    .attr("href", "#0")
    .show();
});

function translateError(err) {
  if (typeof err === "string") {
    return err;
  }
  if (err.code && err.message && err.data) {
    return `Error (${err.code}): ${err.message} Data: ${err.data}`;
  }
  if (err.code && err.message) {
    return `Error (${err.code}): ${err.message}`;
  }
  return err.message || err.toString();
}

const regexTx = /^0x[a-f0-9]{64}$/;

function isValidTx(tx) {
  if (!tx) {
    return false;
  }
  return regexTx.test(tx.toLowerCase());
}

function isValidAddress(addr) {
  return ethers.utils.isAddress(addr);
}

function loadContract(abiName, address) {
  console.log(`load contract ${abiName} at address ${address}...`);
  if (!window._contractsCache) {
    window._contractsCache = {};
  }
  let cache = window._contractsCache,
    key = abiName + "_" + address,
    value = cache[key];
  if (!value) {
    let abi = window.abis[abiName];
    if (!abi) {
      throw "No abi found for name: " + abiName;
    }
    value = new ethers.Contract(
      address,
      abi,
      window.getWeb3Provider().getSigner()
    );
    cache[key] = value;
  }
  return value;
}

function getParam(parameterName, defaultValue) {
  let result = defaultValue,
    tmp = [],
    items = location.search.substring(1).split("&");
  for (let index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) {
      return decodeURIComponent(tmp[1]);
    }
  }
  return result;
}

window.mainnet = getParam("network", "mainnet") === "mainnet";

function getChainDefByChainId(chainId) {
  const defs = chainsDefinitions.filter((c) => c.chainId === chainId);
  if (defs.length === 0) {
    console.warn("can not find chainDef", chainId);
    return null;
  }
  return defs[0];
}

function getChainDefs() {
  return chainsDefinitions.filter((c) => {
    return mainnet === c.mainnet;
  });
}

window.chains = getChainDefs();

function initializeProviders() {
  // filter chains by mainnet or testnet
  const chainDefs = getChainDefs();
  const providers = {};
  for (let k in chainDefs) {
    const chainDef = chainDefs[k];
    const rpcs = chainDef.rpc; // got rpc array
    const providers = [];
    for (let j = 0; j < rpcs.length; j++) {
      providers.push(
        new ethers.providers.JsonRpcProvider(rpcs[j], chainDef.chainId)
      );
    }
    providers[chainDef.chainId] = new ethers.providers.FallbackProvider(
      providers
    );
  }
  return providers;
}

// read-only provider
window.rpcProviders = initializeProviders();

// provider for writing contracts or sign message
window.web3Provider = getWeb3Provider();

// read-only provider, only querying data from blockchain
function getRpcProvider(chainId) {
  return rpcProviders[chainId];
}

function getContractByChainId(chainId, isRpc, name, address) {
  const chainDef = getChainDefByChainId(chainId);

  if (typeof chainDef === "undefined") {
    console.warn("can not get chainDef", chainId);
    return null;
  }

  const abi = abis[name];

  if (typeof abi === "undefined") {
    console.warn("can not get abi", name);
    return null;
  }

  address =
    typeof address === "undefined"
      ? addresses[chainDef.chainName][name]
      : address;

  if (typeof address === "undefined") {
    console.warn("can not get address", chainId, name);
    return null;
  }

  if (isRpc) return ethers.Contract(address, abi, getRpcProvider(chainId));
  return ethers.Contract(address, abi, getWeb3Provider());
}

console.log(
  `Loaded ${window.mainnet ? "mainnet" : "testnet"} chains:`,
  window.chains
);

function getWeb3Provider() {
  if (!window.web3Provider) {
    if (!window.ethereum) {
      console.error("there is no web3 provider.");
      return null;
    }
    window.web3Provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
  }
  return window.web3Provider;
}

// define a global event bus
Vue.prototype.bus = new Vue();
