require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = process.env.MNENOMIC;
// var privateKey = 'YOUR KEY';

const address = "0xe07Cdeade8a9A55068B2AC599e2E810FC7389423";
const privateKey = "0x497d644adc6a2149ce16d7419ce339c6822798a03501bd3dd4a5c3f4dda8768e";
const infuraKey = "7c1447319c004138ae86e4bf861b554b";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(mnemonic, process.env.rinkeby.infura.io/v3/fcbcb2a5dc574c33be6baa5d697bcf20
          ),
      network_id: "4",
      skipDryRun: true
    },
    ropsten: {
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      provider:
        new HDWalletProvider(privateKey, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/"
          ),
      network_id: "1",
      gas: 4600000,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.5.2",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
