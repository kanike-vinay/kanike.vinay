const main = async () => {
  const Money = await hre.ethers.getContractFactory("Money");
  const money = await Money.deploy();

  await money.deployed();

  console.log(`Money deployed to ${money.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
