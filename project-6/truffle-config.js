const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'hover envelope crowd find stock banner olive divorce iron develop flee rude'; //fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/ce04246ae1d449b08e54c0db7ab8de7e`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  },
  compilers: {
     solc: {
       version: "0.4.24"
     }
  }
};