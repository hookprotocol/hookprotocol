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

const chains = [
    {
        "chainId": 1,
        "chainName": "eth",
        "name": "Ethereum",
        "mainnet": true,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://api.mycryptoapi.com/eth"
        ],
        "explorers": {
            "name": "etherscan",
            "url": "https://etherscan.io"
        },
        "infoURL": "https://ethereum.org"
    },
    {
        "chainId": 128,
        "chainName": "heco",
        "name": "Huobi ECO Chain",
        "mainnet": true,
        "nativeCurrency": {
            "name": "HECO HT",
            "symbol": "HT",
            "decimals": 18
        },
        "rpc": [
            "https://http-mainnet.hecochain.com"
        ],
        "explorers": {
            "name": "hecoinfo",
            "url": "https://hecoinfo.com"
        },
        "infoURL": "https://www.hecochain.com"
    },
    {
        "chainId": 256,
        "chainName": "heco_test",
        "name": "HECO Testnet",
        "mainnet": false,
        "nativeCurrency": {
            "name": "HT Test Token",
            "symbol": "HT",
            "decimals": 18
        },
        "rpc": [
            "https://http-testnet.hecochain.com"
        ],
        "explorers": {
            "name": "hecoinfo",
            "url": "https://testnet.hecoinfo.com"
        },
        "infoURL": "https://www.hecochain.com"
    },
    {
        "chainId": 3,
        "chainName": "ropsten",
        "mainnet": false,
        "name": "ETH Ropsten Testnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://ropsten.infura.io/v3/${INFURA_API_KEY}"
        ],
        "explorers": {
            "name": "etherscan",
            "url": "https://ropsten.etherscan.io"
        },
        "infoURL": "https://github.com/ethereum/ropsten"
    },
    {
        "chainId": 322,
        "chainName": "kcc_test",
        "mainnet": false,
        "name": "KuCoin Community Chain Testnet",
        "nativeCurrency": {
            "name": "KuCoin Testnet Token",
            "symbol": "KCS",
            "decimals": 18
        },
        "rpc": [
            "https://rpc-testnet.kucoin.one"
        ],
        "explorers": {
            "name": "kcc-scan",
            "url": "https://scan-testnet.kucoin.one"
        },
        "infoURL": "https://scan-testnet.kucoin.one"
    },
    {
        "chainId": 4,
        "chainName": "rinkeby",
        "mainnet": false,
        "name": "ETH Rinkeby Testnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://rinkeby.infura.io/v3/${INFURA_API_KEY}"
        ],
        "explorers": {
            "name": "etherscan",
            "url": "https://rinkeby.etherscan.io"
        },
        "infoURL": "https://www.rinkeby.io"
    },
    {
        "chainId": 42,
        "chainName": "kovan",
        "mainnet": false,
        "name": "ETH Kovan Testnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://kovan.poa.network"
        ],
        "explorers": {},
        "infoURL": "https://kovan-testnet.github.io/website"
    },
    {
        "chainId": 56,
        "chainName": "bsc",
        "mainnet": true,
        "name": "Binance Smart Chain",
        "nativeCurrency": {
            "name": "Binance Chain Native Token",
            "symbol": "BNB",
            "decimals": 18
        },
        "rpc": [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io"
        ],
        "explorers": {
            "name": "bscscan",
            "url": "https://bscscan.com"
        },
        "infoURL": "https://www.binance.org"
    },
    {
        "chainId": 65,
        "chainName": "okexchain_test",
        "mainnet": false,
        "name": "OKExChain Testnet",
        "nativeCurrency": {
            "name": "OKExChain Global Utility Token in testnet",
            "symbol": "OKT",
            "decimals": 18
        },
        "rpc": [
            "https://exchaintestrpc.okex.org"
        ],
        "faucets": [
            "https://www.okex.com/drawdex"
        ],
        "explorers": [],
        "infoURL": "https://www.okex.com/okexchain"
    },
    {
        "chainId": 66,
        "chainName": "okexchain",
        "mainnet": true,
        "name": "OKExChain Mainnet",
        "nativeCurrency": {
            "name": "OKExChain Global Utility Token",
            "symbol": "OKT",
            "decimals": 18
        },
        "rpc": [
            "https://exchainrpc.okex.org"
        ],
        "faucets": [],
        "explorers": [],
        "infoURL": "https://www.okex.com/okexchain"
    },
    {
        "chainId": 97,
        "chainName": "bsc_test",
        "mainnet": false,
        "name": "BSC Testnet",
        "nativeCurrency": {
            "name": "Binance Chain Native Token",
            "symbol": "tBNB",
            "decimals": 18
        },
        "rpc": [
            "https://data-seed-prebsc-1-s1.binance.org:8545",
            "https://data-seed-prebsc-2-s1.binance.org:8545",
            "https://data-seed-prebsc-1-s2.binance.org:8545",
            "https://data-seed-prebsc-2-s2.binance.org:8545",
            "https://data-seed-prebsc-1-s3.binance.org:8545",
            "https://data-seed-prebsc-2-s3.binance.org:8545"
        ],
        "faucets": [
            "https://testnet.binance.org/faucet-smart"
        ],
        "explorers": [
            {
                "name": "bscscan-testnet",
                "url": "https://testnet.bscscan.com",
                "standard": "EIP3091"
            }
        ],
        "infoURL": "https://testnet.binance.org/"
    }
]

window.mainnet = getParam('network', 'mainnet') === 'mainnet';

window.chains = chains.filter(c => c.mainnet === window.mainnet)
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
