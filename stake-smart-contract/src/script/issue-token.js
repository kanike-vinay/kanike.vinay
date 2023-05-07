const stakingDapp = artifacts.require("StakingDapp");

module.exports = async function(callback) {
    let stakingDApp = await stakingDapp.deployed();
    await stakingDApp.issueDummyToken();
    console.log("Dummy token issue");
    callback();
}