require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Vg6uN3o1pJBdU8HPTjVji5VCoGRtu17H",
      accounts: [
        "",
      ],
    },
  },
};
