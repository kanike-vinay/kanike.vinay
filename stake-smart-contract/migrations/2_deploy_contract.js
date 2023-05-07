const dummyToken = artifacts.require("DummyToken");
const tetherToken = artifacts.require("TetherToken");
const stakingDapp = artifacts.require("StakingDapp");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(tetherToken);
    const dummy = await tetherToken.deployed();

    await deployer.deploy(dummyToken);
    const tether = await dummyToken.deployed();

    await deployer.deploy(stakingDapp, dummy.address, tether.address);
    const stakingDApp = await stakingDapp.deployed();

    await dummy.transferValue(stakingDApp.address, '100000000000000000');

    await tether.transferValue(accounts[1], '100000000000000000');
}