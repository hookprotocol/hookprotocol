// custom js

Vue.filter('abbrAddr', function (addr) {
    if (addr) {
        return addr.substring(0, 8) + '...' + addr.substring(addr.length - 6);
    }
    return '';
});

$(function () {
    let nav = $('#navItems');
    nav.find('a.nav-link[href="' + location.pathname + '"]').parent().addClass('active').attr('href', '#0').show();
});

function translateError(err) {
    if (typeof (err) === 'string') {
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
    let
        cache = window._contractsCache,
        key = abiName + '_' + address,
        value = cache[key];
    if (!value) {
        let abi = window.abis[abiName];
        if (!abi) {
            throw 'No abi found for name: ' + abiName;
        }
        value = new ethers.Contract(address, abi, window.getWeb3Provider().getSigner());
        cache[key] = value;
    }
    return value;
}

function getParam(parameterName, defaultValue) {
    let
        result = defaultValue,
        tmp = [],
        items = location.search.substring(1).split('&');
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split('=');
        if (tmp[0] === parameterName) {
            return decodeURIComponent(tmp[1]);
        }
    }
    return result;
}

window.mainnet = getParam('network', 'mainnet') === 'mainnet';

let chains = window.chainsDefinitions.filter(c => c.mainnet === window.mainnet)
    .map(c => {
        c.contracts = window.addresses[c.chainName];
        return c;
    }).filter(c => {
        if (!c.contracts) {
            console.error(`ERROR: address not found in window.addresses for ${c.chainName}`);
            return false;
        }
        return true;
    }).sort((c1, c2) => c1.name < c2.name ? -1 : 1);

window.chains = chains;

console.log(`Loaded ${window.mainnet ? 'mainnet' : 'testnet'} chains:`);
console.log(window.chains);


function getWeb3Provider() {
    if (!window.web3Provider) {
        if (!window.ethereum) {
            console.error("there is no web3 provider.");
            return null;
        }
        window.web3Provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    }
    return window.web3Provider;
}
