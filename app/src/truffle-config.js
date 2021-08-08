const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  networks: {
    development: {
      host: "192.168.0.132",
      port: 8545,
      network_id: "1337"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://matic-mumbai.chainstacklabs.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: '^0.8.2',
    }
  }
};
