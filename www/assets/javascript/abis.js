// generate abi
window.abis = {}
window.abis.Registry = [{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"registerHash","type":"bytes32"},{"indexed":false,"internalType":"uint96","name":"srcChainId","type":"uint96"},{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"uint96","name":"targetChainId","type":"uint96"},{"indexed":false,"internalType":"address","name":"targetToken","type":"address"},{"indexed":false,"internalType":"address","name":"srcTokenOwner","type":"address"},{"indexed":false,"internalType":"bytes32","name":"srcTokenCreationTx","type":"bytes32"}],"name":"LogRegister","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"}],"name":"LogWithdrawFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_chainId","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"bytes32","name":"srcTokenCreationTx","type":"bytes32"},{"internalType":"uint96[]","name":"targetChainIds","type":"uint96[]"},{"internalType":"address[]","name":"targetTokens","type":"address[]"}],"name":"register","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"addresspayable","name":"receiver","type":"address"}],"name":"withdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"}]
window.abis.Whitelist = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"bridgeHashs","type":"bytes32[]"}],"name":"getBridgeConfig","outputs":[{"components":[{"internalType":"uint96","name":"srcChainId","type":"uint96"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint96","name":"targetChainId","type":"uint96"},{"internalType":"address","name":"targetToken","type":"address"}],"internalType":"structWhitelist.BridgeConfig[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"}],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint96[]","name":"srcChainIds","type":"uint96[]"},{"internalType":"address[]","name":"srcTokens","type":"address[]"},{"internalType":"uint96[]","name":"targetChainIds","type":"uint96[]"},{"internalType":"address[]","name":"targetTokens","type":"address[]"},{"internalType":"bytes32[]","name":"bridgeHashs","type":"bytes32[]"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}]
window.abis.Bridge = [{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"crossTransferId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"indexed":false,"internalType":"uint96","name":"srcChainId","type":"uint96"},{"indexed":false,"internalType":"address","name":"srcToken","type":"address"},{"indexed":false,"internalType":"uint96","name":"targetChainId","type":"uint96"},{"indexed":false,"internalType":"address","name":"targetToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"}],"name":"LogCrossTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"indexed":false,"internalType":"enumBridge.Status","name":"status","type":"uint8"}],"name":"LogRollback","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"LogSetAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"indexed":false,"internalType":"enumBridge.Status","name":"status","type":"uint8"}],"name":"LogWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_chainId","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"_rollbackCrossTransferHashs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"_withdrawCrossTransferHashs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"internalType":"uint256","name":"crossTransferId","type":"uint256"},{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"internalType":"uint96","name":"srcChainId","type":"uint96"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint96","name":"targetChainId","type":"uint96"},{"internalType":"address","name":"targetToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"internalType":"structBridge.CrossTransfer[]","name":"crossTransfers","type":"tuple[]"},{"internalType":"uint256","name":"expired","type":"uint256"}],"name":"batchRollback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"internalType":"uint256","name":"crossTransferId","type":"uint256"},{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"internalType":"uint96","name":"srcChainId","type":"uint96"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint96","name":"targetChainId","type":"uint96"},{"internalType":"address","name":"targetToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"internalType":"structBridge.CrossTransfer[]","name":"crossTransfers","type":"tuple[]"},{"internalType":"uint256","name":"expired","type":"uint256"}],"name":"batchWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"srcToken","type":"address"}],"name":"createHookERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint96","name":"targetChainId","type":"uint96"},{"internalType":"address","name":"targetToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"expired","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountCrossTransferHashs","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getCrossTranferFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCrossTransferCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"crossTransferIds","type":"uint256[]"}],"name":"getCrossTransferHashs","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"internalType":"uint256","name":"crossTransferId","type":"uint256"},{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"internalType":"uint96","name":"srcChainId","type":"uint96"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint96","name":"targetChainId","type":"uint96"},{"internalType":"address","name":"targetToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"internalType":"structBridge.CrossTransfer","name":"crossTransfer","type":"tuple"},{"internalType":"uint256","name":"expired","type":"uint256"}],"name":"rollback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"bridgeHashs","type":"bytes32[]"},{"components":[{"internalType":"uint32","name":"rate","type":"uint32"},{"internalType":"uint112","name":"min","type":"uint112"},{"internalType":"uint112","name":"max","type":"uint112"}],"internalType":"structBridge.FeeConfig[]","name":"configs","type":"tuple[]"}],"name":"setBridgeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"crossTransferHash","type":"bytes32"},{"internalType":"uint256","name":"crossTransferId","type":"uint256"},{"internalType":"bytes32","name":"bridgeHash","type":"bytes32"},{"internalType":"uint96","name":"srcChainId","type":"uint96"},{"internalType":"address","name":"srcToken","type":"address"},{"internalType":"uint96","name":"targetChainId","type":"uint96"},{"internalType":"address","name":"targetToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"internalType":"structBridge.CrossTransfer","name":"crossTransfer","type":"tuple"},{"internalType":"uint256","name":"expired","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"address","name":"receiver","type":"address"}],"name":"withdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"}]
window.abis.HookBridgeERC20 = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender_","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"subtractedValue_","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"addedValue_","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"},{"internalType":"address","name":"_vault","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender_","type":"address"},{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
window.addresses = {
  "kovan": {
    "Bridge": {
      "address": "0x1fF1D8694C888459A92df821B7c95334f2C1C34d",
      "blockHash": "0x7212cbb53fca3ebe8379440a4179106220b857f44989446db96c5a5f7976a32e",
      "blockNumber": 24783206
    },
    "Hook": "",
    "FakeDAI": {
      "address": "0xdf77aBEc666a0546348933a8e20255C795bBa9E3",
      "blockHash": "0x7c09556616a4264ebaab5cb3f0191a66a5475cc3eec809b37c449501542367e4",
      "blockNumber": 24783213
    },
    "FakeUSD": {
      "address": "0xBf7dbb231e1362010b243399Aa3A44d0EF6BDfcB",
      "blockHash": "0x180de305f486905257a34bc3457c518eed6c2b8fb10da8e6f27b40e5729efb55",
      "blockNumber": 24783217
    },
    "Registry": {
      "address": "0x400658A47e37aCA5034791a75c42C81B4F620d2E",
      "blockHash": "0xcfa1a8d98166fb6a864b75d6d3acc18da487ae55bb1c394671a20111485df592",
      "blockNumber": 24783210
    },
    "HookBridgeERC20Factory": {
      "address": "0x34Ea796EA5746ae1bd1026a9540274b15c65FC03",
      "blockHash": "0x399fa57f89df750ed12c5e9a1385bfe2df60dda05eca3eb055c6067aaeafb447",
      "blockNumber": 24783220
    },
    "HookBridgeERC20": {
      "address": "0xA8BC978A376a997b53ccF2047777eDacb01F3dAc",
      "blockHash": "0x34d63bea9ab69eb641347178496f831cb29012e9c404173f3969d1299c7c4d93",
      "blockNumber": 24783223
    }
  },
  "rinkeby": {
    "Bridge": {
      "address": "0x7c1543cC3a12bbb608C16e2b9d37705da644a07a",
      "blockHash": "0x25f09676458c15007c71667fc82ccecafe55b789f3457b6e12b3a67baf8d3950",
      "blockNumber": 8566600
    },
    "Hook": "",
    "FakeDAI": {
      "address": "0xFa9dcc5F938a3c42cCe83Aa9fAa9CfECFf26d040",
      "blockHash": "0x8072a3d0d153a5ee4e0752b2a9467dda8d6c3609d5758fd59aee4ae7a1e6432c",
      "blockNumber": 8566602
    },
    "FakeUSD": {
      "address": "0x58f52741dCB9AC6438c27178F74122D9C1A1307D",
      "blockHash": "0x194f728342c968cb2967f6884231dd9160ef43ab11d7d8ca9f4540fdbe68e33a",
      "blockNumber": 8566603
    },
    "Registry": {
      "address": "0x13751c1d2bb7d38afB5eA8037257c6496eCE5d5A",
      "blockHash": "0xf5da32f95b0ba6c36f048cb09eecfd9b9ba1f734f44f34c4137b2138670fd24a",
      "blockNumber": 8566601
    },
    "HookBridgeERC20Factory": {
      "address": "0xE879161A3Ec7Ac904Bc04bBF878D9BF07d83dbd8",
      "blockHash": "0x7a6ddbef3b9462647e182e8ff399bfa6b1783ae44a73b11584821209ebf70a42",
      "blockNumber": 8566604
    },
    "HookBridgeERC20": {
      "address": "0x2a9626452C85754dfCBFE93F21485ae68E032062",
      "blockHash": "0x7ad3da57eccfdd86020fea37a456f6bd97904d5541c6bcc468236f6750f52a2f",
      "blockNumber": 8566605
    }
  },
  "bsc_test": {
    "Bridge": {
      "address": "0xD1336f013710332738dbFF5464Ef0F59E093313C",
      "blockHash": "0xc4ce48c9babfc3bad70e4adb785645d9aab658ec678b37f3f85e28ee3f6b8322",
      "blockNumber": 8747776
    },
    "Hook": "",
    "FakeDAI": {
      "address": "0x5885fbAF19E52cBfF4840ef6b6D3Ba5c1148DF89",
      "blockHash": "0x7e59370c555eb11b1a0d690b638a52c03a62de5c13acd0f083225b6c9fea72d5",
      "blockNumber": 8747782
    },
    "FakeUSD": {
      "address": "0x7bE265BE64800156024e0e6d6Fc91ea4D4EB81BF",
      "blockHash": "0xaa860189e0572a59a7e7bc16c295300bd3294c2f9c12c09d36955dbf4bab1b5a",
      "blockNumber": 8747785
    },
    "Registry": {
      "address": "0xe02E18Cd977D96Aa02d5Fb3C0DD169F4274e2f39",
      "blockHash": "0x3dc2754f601bc80e39582a32525b00a8f31e4dc7b79cde064dc341fa2d60ffae",
      "blockNumber": 8747779
    },
    "HookBridgeERC20Factory": {
      "address": "0xAabe7F3E63C1d4f0342e93Ec58699A8A27E2f1B3",
      "blockHash": "0x113eab8a0cd56f9579ecbe4f748145aa74a19bce162274824e8c20792b801b87",
      "blockNumber": 8747789
    },
    "HookBridgeERC20": {
      "address": "0x45F89a0ad1176DcBC93E95655942FbDb6cd621bd",
      "blockHash": "0x97ae3e0ace879858cdb32790f02f305b0c5fc9cc7d011c43c392e5d1249f690b",
      "blockNumber": 8747793
    }
  },
  "heco_test": {
    "Bridge": {
      "address": "0x6A172A316D0929573Dc0896aC9C482D687106e18",
      "blockHash": "0xba397bb5c2c2156bb9dbbb3a02f32a5f2bb83dee3a8317964c54bc81ab0d1972",
      "blockNumber": 4614412
    },
    "Hook": "",
    "FakeDAI": {
      "address": "0x89d43694ec0FeAC91aC589d10d81687f1454FDd7",
      "blockHash": "0x8a8f638c07d6a3cb36c3ff925be0ba97ffd537cd39c67698bdfec83b16d360b8",
      "blockNumber": 4614416
    },
    "FakeUSD": {
      "address": "0xA492Fc0AaAf5a9294bd395cD2f0C26693863bB64",
      "blockHash": "0xc7159c8c1098f675fab4cd4e2d7995cb50772801dd0a2c6a4b56cd9e4dca17fc",
      "blockNumber": 4614418
    },
    "Registry": {
      "address": "0xc54E62bF46f4aF3042232d789Bb81EEf98685e56",
      "blockHash": "0x4e4ee26632bdf91ffaa8e1dadcc7c2c1faa3e0a5dd649732029fdc7bef80276e",
      "blockNumber": 4614414
    },
    "HookBridgeERC20Factory": {
      "address": "0xC5d3954AC27DFd3113188c39910bAdc18a57063b",
      "blockHash": "0x3d8c669925fe6011b7dabd3c56686177e877dd78bf4b21ea9e11b2fd21003df4",
      "blockNumber": 4614420
    },
    "HookBridgeERC20": {
      "address": "0x6f008BE3d498110583Ac7E3C65A9c4ea6B32175b",
      "blockHash": "0x3aadf31759d5ffb34c3edccef252fffcb83674e6a6b174a47f49064106d38e46",
      "blockNumber": 4614422
    }
  }
}
window.chainsDefinitions = [
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
