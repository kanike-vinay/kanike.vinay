import { getEthereumContract } from "../utils/EthereumProvider";
import { moneyContractABI, moneyContractAddress } from "../utils/constants";

export const depositAmountService = async (amount) => {
  const moneyContract = getEthereumContract(
    moneyContractAddress,
    moneyContractABI
  );
  const depositHash = await moneyContract.deposit(amount);
  await depositHash.wait();
};

export const withdrawAmountService = async () => {
  const moneyContract = getEthereumContract(
    moneyContractAddress,
    moneyContractABI
  );
  const withdraw = await moneyContract.withdraw();
  return withdraw;
};
