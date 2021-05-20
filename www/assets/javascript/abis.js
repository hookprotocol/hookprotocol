// generate abi
window.abis = {};
window.abis.Registry = [
  {
    inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "registerHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "srcChainId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "targetChainId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcTokenOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "srcTokenCreationTx",
        type: "bytes32",
      },
    ],
    name: "LogRegister",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "LogWithdrawFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "_chainId",
    outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "srcToken", type: "address" },
      { internalType: "bytes32", name: "srcTokenCreationTx", type: "bytes32" },
      { internalType: "uint96[]", name: "targetChainIds", type: "uint96[]" },
      { internalType: "address[]", name: "targetTokens", type: "address[]" },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "addresspayable", name: "receiver", type: "address" },
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
window.abis.Whitelist = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [{ internalType: "bytes32", name: "bridgeHash", type: "bytes32" }],
    name: "getBridgeConfig",
    outputs: [
      {
        components: [
          { internalType: "uint96", name: "srcChainId", type: "uint96" },
          { internalType: "address", name: "srcToken", type: "address" },
          { internalType: "uint96", name: "targetChainId", type: "uint96" },
          { internalType: "address", name: "targetToken", type: "address" },
        ],
        internalType: "structWhitelist.BridgeConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "bridgeHash", type: "bytes32" }],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint96[]", name: "srcChainIds", type: "uint96[]" },
      { internalType: "address[]", name: "srcTokens", type: "address[]" },
      { internalType: "uint96[]", name: "targetChainIds", type: "uint96[]" },
      { internalType: "address[]", name: "targetTokens", type: "address[]" },
      { internalType: "bytes32[]", name: "bridgeHashs", type: "bytes32[]" },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "admin", type: "address" },
      { internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "updateAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
window.abis.Bridge = [
  {
    inputs: [{ internalType: "address", name: "vault", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "crossTransferHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "crossTransferId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bridgeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "srcChainId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "targetChainId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      { indexed: false, internalType: "uint256", name: "fee", type: "uint256" },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "LogCrossTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "crossTransferHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enumBridge.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "LogRollback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "LogSetAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "crossTransferHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enumBridge.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "LogWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "_admins",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_chainId",
    outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "_rollbackCrossTransferHashs",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "_withdrawCrossTransferHashs",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "crossTransferHash",
            type: "bytes32",
          },
          { internalType: "uint256", name: "crossTransferId", type: "uint256" },
          { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
          { internalType: "uint96", name: "srcChainId", type: "uint96" },
          { internalType: "address", name: "srcToken", type: "address" },
          { internalType: "uint96", name: "targetChainId", type: "uint96" },
          { internalType: "address", name: "targetToken", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "fee", type: "uint256" },
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "address", name: "receiver", type: "address" },
        ],
        internalType: "structBridge.CrossTransfer[]",
        name: "crossTransfers",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "expired", type: "uint256" },
    ],
    name: "batchRollback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "crossTransferHash",
            type: "bytes32",
          },
          { internalType: "uint256", name: "crossTransferId", type: "uint256" },
          { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
          { internalType: "uint96", name: "srcChainId", type: "uint96" },
          { internalType: "address", name: "srcToken", type: "address" },
          { internalType: "uint96", name: "targetChainId", type: "uint96" },
          { internalType: "address", name: "targetToken", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "fee", type: "uint256" },
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "address", name: "receiver", type: "address" },
        ],
        internalType: "structBridge.CrossTransfer[]",
        name: "crossTransfers",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "expired", type: "uint256" },
    ],
    name: "batchWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "srcToken", type: "address" }],
    name: "createHookERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
      { internalType: "address", name: "srcToken", type: "address" },
      { internalType: "uint96", name: "targetChainId", type: "uint96" },
      { internalType: "address", name: "targetToken", type: "address" },
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "expired", type: "uint256" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getAccountCrossTransferHashs",
    outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "getCrossTranferFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCrossTransferCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "crossTransferIds",
        type: "uint256[]",
      },
    ],
    name: "getCrossTransferHashs",
    outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "crossTransferHash",
            type: "bytes32",
          },
          { internalType: "uint256", name: "crossTransferId", type: "uint256" },
          { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
          { internalType: "uint96", name: "srcChainId", type: "uint96" },
          { internalType: "address", name: "srcToken", type: "address" },
          { internalType: "uint96", name: "targetChainId", type: "uint96" },
          { internalType: "address", name: "targetToken", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "fee", type: "uint256" },
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "address", name: "receiver", type: "address" },
        ],
        internalType: "structBridge.CrossTransfer",
        name: "crossTransfer",
        type: "tuple",
      },
      { internalType: "uint256", name: "expired", type: "uint256" },
    ],
    name: "rollback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "admin", type: "address" },
      { internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
      {
        components: [
          { internalType: "uint32", name: "rate", type: "uint32" },
          { internalType: "uint112", name: "min", type: "uint112" },
          { internalType: "uint112", name: "max", type: "uint112" },
        ],
        internalType: "structBridge.FeeConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "setBridgeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "crossTransferHash",
            type: "bytes32",
          },
          { internalType: "uint256", name: "crossTransferId", type: "uint256" },
          { internalType: "bytes32", name: "bridgeHash", type: "bytes32" },
          { internalType: "uint96", name: "srcChainId", type: "uint96" },
          { internalType: "address", name: "srcToken", type: "address" },
          { internalType: "uint96", name: "targetChainId", type: "uint96" },
          { internalType: "address", name: "targetToken", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "fee", type: "uint256" },
          { internalType: "address", name: "sender", type: "address" },
          { internalType: "address", name: "receiver", type: "address" },
        ],
        internalType: "structBridge.CrossTransfer",
        name: "crossTransfer",
        type: "tuple",
      },
      { internalType: "uint256", name: "expired", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      { internalType: "address", name: "receiver", type: "address" },
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
window.abis.HookBridgeERC20 = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner_", type: "address" },
      { internalType: "address", name: "spender_", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "amount_", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "subtractedValue_", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender_", type: "address" },
      { internalType: "uint256", name: "addedValue_", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_symbol", type: "string" },
      { internalType: "uint8", name: "_decimals", type: "uint8" },
      { internalType: "uint256", name: "_totalSupply", type: "uint256" },
      { internalType: "address", name: "_vault", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient_", type: "address" },
      { internalType: "uint256", name: "amount_", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender_", type: "address" },
      { internalType: "address", name: "recipient_", type: "address" },
      { internalType: "uint256", name: "amount_", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
window.addresses = {
  kovan: {
    Bridge: {
      address: "0x7F2321eADAf0b56778260335D922cc40C56221F1",
      blockHash:
        "0x29e740cba7224282abdbf766f9ad05b1bc2b912a55ed99a2ff770ca9c7e24b8f",
      blockNumber: 24809485,
    },
    Hook: "",
    FakeDAI: {
      address: "0x23A49Be01A7b09C99B75B2738054d3Da4eF1bc25",
      blockHash:
        "0x2ada17c81426140b09f43b1734794c9381f8e75832f26f6de0471887a89a59ed",
      blockNumber: 24809498,
    },
    FakeUSD: {
      address: "0x0F50a393E39ccE70c7aB161E7C70Fe7Bd481ef03",
      blockHash:
        "0xf0dbe17e354b47c9b7a6314d4778f371bda19827f74aac14960d065e3d097ab3",
      blockNumber: 24809504,
    },
    Registry: {
      address: "0xC24938dDD0EFB2D4a02AFbb3b3A9dD4AbDC485c6",
      blockHash:
        "0x4e19f987890c5292bcea9dee9814292c98fd1418876450f71f89845d75b3b8b5",
      blockNumber: 24809492,
    },
    HookBridgeERC20Factory: {
      address: "0xe3F7fC5AA0633760Fb10B066c65CCEd7820969Ee",
      blockHash:
        "0x302fb52d117e5506cd70050fa6f93865f8721f20543e88416e86ea0fb32d5046",
      blockNumber: 24809509,
    },
    HookBridgeERC20: {
      address: "0x048eeF953038255980967B70A9479dF725a70348",
      blockHash:
        "0xd63c00eed40034653f56b12d860c996ea6e274c16e6469169abfec2db5914fbe",
      blockNumber: 24809520,
    },
  },
  rinkeby: {
    Bridge: {
      address: "0x5aE5ba01077690F0EC89F960360348e61893035B",
      blockHash:
        "0x4ec850a93064cdeaf7f3e96243f69e74ec5eed64558f6e2c7bb64fad47367c8d",
      blockNumber: 8576975,
    },
    Hook: "",
    FakeDAI: {
      address: "0x7424905e20893123B347d3B869fEe9E0639B2B7F",
      blockHash:
        "0x065a3b249601c7e05aa756fd7d9112b693c9ec9923fb8e0cb5ca21e9ca4adbff",
      blockNumber: 8576979,
    },
    FakeUSD: {
      address: "0xE59dCb6aE3435fB0d67741C6b925B57376C652f8",
      blockHash:
        "0x8c050f7ee635305d92fd08ae462319b46f2e16ed7abf886177bd5fac4ca3433a",
      blockNumber: 8576981,
    },
    Registry: {
      address: "0x9B0e8d2Aed22Bf2852B4C75649a40Ddc99B58c31",
      blockHash:
        "0x19de261968b8215be9bf57b93456768a5d94c1d1c03e67f5e099dd158b0e50d0",
      blockNumber: 8576977,
    },
    HookBridgeERC20Factory: {
      address: "0x885Fac961ce5946AcdA4cbE6AcBf94B3717c6f82",
      blockHash:
        "0x2a497cb06d72ce43f529aa06020c1bbb0be796d81c9beeca62cbbf1ff39b6306",
      blockNumber: 8576984,
    },
    HookBridgeERC20: {
      address: "0x90B40D7Fd46ff879A88555f795358045686391D7",
      blockHash:
        "0x8c72bcd718fbd504bdbea3bdd76d0f363112ba2e96ee5b3174a9358d7013a78f",
      blockNumber: 8576985,
    },
  },
  bsc_test: {
    Bridge: {
      address: "0x3d56E946598a4040Ee6C01Cdc881AF184F3713d2",
      blockHash:
        "0xc4b6bf0886ea1fe3fd891f23835193f82f787dc87bb10160960903aa4290defc",
      blockNumber: 8799287,
    },
    Hook: "",
    FakeDAI: {
      address: "0xE740Fdce51ed4049Bfca49415eb184D92A98a22E",
      blockHash:
        "0x976d2163a4a4cc21d71e83dfb53de2af0ea8f9a1005259009f2a79373115d91d",
      blockNumber: 8799295,
    },
    FakeUSD: {
      address: "0xC3b1291aB198ED9857F26d0233dEbdE7a82933f0",
      blockHash:
        "0x25202bfb1d246c474e81146a8f62c782975ee9e143ec065c8e2558914602dbb4",
      blockNumber: 8799298,
    },
    Registry: {
      address: "0x58dBb95482A57E58e2d3a640907455e3Ba2DA280",
      blockHash:
        "0x30629d94d1a2573b5b626f2d36fe8d1079ef9808f72e53c71e6f01f42c3febdc",
      blockNumber: 8799291,
    },
    HookBridgeERC20Factory: {
      address: "0x8CaCB3E1535dB72DF80BEA799e50a90B98181e91",
      blockHash:
        "0xbc7eb72c1f0b377db5072f0c06fe8e03a1686b09bab19b9ce3bf3f0248aafe69",
      blockNumber: 8799303,
    },
    HookBridgeERC20: {
      address: "0xa9B46B6ae0112e25EEbcD61Ec08b555A34cFA4Fa",
      blockHash:
        "0xda5455d07cc965eba40f4a9145934b89da2c04ed2c983adeaa680e3c9bb70a62",
      blockNumber: 8799307,
    },
  },
  heco_test: {
    Bridge: {
      address: "0x74d864de14E0AeE30c95C6E0a44018EdF912279b",
      blockHash:
        "0xe56286bc2188d52a9a14de5d607717b9162e12ee7eb654b81e5b328b82c6bf74",
      blockNumber: 4666441,
    },
    Hook: "",
    FakeDAI: {
      address: "0xb284228f7E501308a9D56892dF299848B5220cdf",
      blockHash:
        "0x91784dc4ce5f4c5dd31add93d1877d0e2098b16ff87e593d2758f6c87b1a11f3",
      blockNumber: 4666449,
    },
    FakeUSD: {
      address: "0x4eA9690A203393E743e20545d7B96d6Dd17A3Db2",
      blockHash:
        "0xf756ffb09e11eec56a7b9a6b2cd5b364d26aa96bd3ece9b05f07e4591fce345b",
      blockNumber: 4666453,
    },
    Registry: {
      address: "0x55Ef9945e75Fa886577a9a12DEE5751595d55ABD",
      blockHash:
        "0xb69fef50933bb40f5035eefa1d91da1d50d108aee9a14fe220c08e3072cfa28c",
      blockNumber: 4666445,
    },
    HookBridgeERC20Factory: {
      address: "0xD3ecdE76CBA0F7506B27123A59C5d4A17A15935C",
      blockHash:
        "0x26e6456a1cc4b94aae48ac0ce881facf1c343c4105dc8d5ef7d4139c52677cf1",
      blockNumber: 4666455,
    },
    HookBridgeERC20: {
      address: "0x335860E137dd7dEEf5d36ABcc8F47CBbA0137eA6",
      blockHash:
        "0x7f5fb1fb6b2cbdecfdb408c7662666ff9c7fbea3ba2e8d399f6484257b199270",
      blockNumber: 4666458,
    },
    Whitelist: {
      address: "0x4C8490724b57eB12a1AC751dd732506Fd921f3d9",
      blockHash:
        "0xa4f9357e0723c3fa669a15fc97e49c6706af14808a3aa144cdf8b52d997d7e9c",
      blockNumber: 4666502,
    },
  },
};
window.chainsDefinitions = [
  {
    chainId: 1,
    chainName: "eth",
    name: "Ethereum",
    mainnet: true,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: ["https://api.mycryptoapi.com/eth"],
    explorers: {
      name: "etherscan",
      url: "https://etherscan.io",
    },
    infoURL: "https://ethereum.org",
    iconURL: "/assets/images/crypto/ETH.svg",
  },
  {
    chainId: 128,
    chainName: "heco",
    name: "Huobi ECO Chain",
    mainnet: true,
    nativeCurrency: {
      name: "HECO HT",
      symbol: "HT",
      decimals: 18,
    },
    rpc: ["https://http-mainnet.hecochain.com"],
    explorers: {
      name: "hecoinfo",
      url: "https://hecoinfo.com",
    },
    infoURL: "https://www.hecochain.com",
    iconURL: "/assets/images/crypto/HECO.svg",
  },
  {
    chainId: 256,
    chainName: "heco_test",
    name: "HECO Testnet",
    mainnet: false,
    nativeCurrency: {
      name: "HT Test Token",
      symbol: "HT",
      decimals: 18,
    },
    rpc: ["https://http-testnet.hecochain.com"],
    explorers: {
      name: "hecoinfo",
      url: "https://testnet.hecoinfo.com",
    },
    infoURL: "https://www.hecochain.com",
    iconURL: "/assets/images/crypto/HECO.svg",
  },
  {
    chainId: 3,
    chainName: "ropsten",
    mainnet: false,
    name: "ETH Ropsten Testnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: ["https://ropsten.infura.io/v3/${INFURA_API_KEY}"],
    explorers: {
      name: "etherscan",
      url: "https://ropsten.etherscan.io",
    },
    infoURL: "https://github.com/ethereum/ropsten",
    iconURL: "/assets/images/crypto/ETH.svg",
  },
  {
    chainId: 322,
    chainName: "kcc_test",
    mainnet: false,
    name: "KuCoin Community Chain Testnet",
    nativeCurrency: {
      name: "KuCoin Testnet Token",
      symbol: "KCS",
      decimals: 18,
    },
    rpc: ["https://rpc-testnet.kucoin.one"],
    explorers: {
      name: "kcc-scan",
      url: "https://scan-testnet.kucoin.one",
    },
    infoURL: "https://scan-testnet.kucoin.one",
  },
  {
    chainId: 4,
    chainName: "rinkeby",
    mainnet: false,
    name: "ETH Rinkeby Testnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: ["https://rinkeby.infura.io/v3/${INFURA_API_KEY}"],
    explorers: {
      name: "etherscan",
      url: "https://rinkeby.etherscan.io",
    },
    infoURL: "https://www.rinkeby.io",
    iconURL: "/assets/images/crypto/ETH.svg",
  },
  {
    chainId: 42,
    chainName: "kovan",
    mainnet: false,
    name: "ETH Kovan Testnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: ["https://kovan.poa.network"],
    explorers: {
      name: "etherscan",
      url: "https://kovan.etherscan.io",
    },
    infoURL: "https://kovan-testnet.github.io/website",
    iconURL: "/assets/images/crypto/ETH.svg",
  },
  {
    chainId: 56,
    chainName: "bsc",
    mainnet: true,
    name: "Binance Smart Chain",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpc: [
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
      "https://bsc-dataseed4.ninicoin.io",
    ],
    explorers: {
      name: "bscscan",
      url: "https://bscscan.com",
    },
    infoURL: "https://www.binance.org",
    iconURL: "/assets/images/crypto/BSC.svg",
  },
  {
    chainId: 65,
    chainName: "okexchain_test",
    mainnet: false,
    name: "OKExChain Testnet",
    nativeCurrency: {
      name: "OKExChain Global Utility Token in testnet",
      symbol: "OKT",
      decimals: 18,
    },
    rpc: ["https://exchaintestrpc.okex.org"],
    faucets: ["https://www.okex.com/drawdex"],
    explorers: {
      name: "exchain",
      url: "https://okchain",
    },
    infoURL: "https://www.okex.com/okexchain",
    iconURL: "/assets/images/crypto/OKB.svg",
  },
  {
    chainId: 66,
    chainName: "okexchain",
    mainnet: true,
    name: "OKExChain Mainnet",
    nativeCurrency: {
      name: "OKExChain Global Utility Token",
      symbol: "OKT",
      decimals: 18,
    },
    rpc: ["https://exchainrpc.okex.org"],
    faucets: [],
    explorers: {
      name: "exchain",
      url: "https://okchain",
    },
    infoURL: "https://www.okex.com/okexchain",
    iconURL: "/assets/images/crypto/OKB.svg",
  },
  {
    chainId: 97,
    chainName: "bsc_test",
    mainnet: false,
    name: "BSC Testnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "tBNB",
      decimals: 18,
    },
    rpc: [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
      "https://data-seed-prebsc-2-s1.binance.org:8545",
      "https://data-seed-prebsc-1-s2.binance.org:8545",
      "https://data-seed-prebsc-2-s2.binance.org:8545",
      "https://data-seed-prebsc-1-s3.binance.org:8545",
      "https://data-seed-prebsc-2-s3.binance.org:8545",
    ],
    faucets: ["https://testnet.binance.org/faucet-smart"],
    explorers: {
      name: "bscscan-testnet",
      url: "https://testnet.bscscan.com",
    },
    infoURL: "https://testnet.binance.org/",
    iconURL: "/assets/images/crypto/BSC.svg",
  },
];
