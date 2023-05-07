import { getEthereumContract } from "../utils/EthereumProvider";
import { myTokenContractABI, myTokenContractAddress } from "../utils/constants";

export const getBalance = async (address) => {
  const myTokenContract = getEthereumContract(
    myTokenContractAddress,
    myTokenContractABI
  );
  const balance = await myTokenContract.balanceOf(address);
  return balance.toNumber();
};

export const getDecimals = async () => {
    const myTokenContract = getEthereumContract(
        myTokenContractAddress,
        myTokenContractABI
    );
    return await myTokenContract.decimals();
}

export const getTokenName = async () => {
    const myTokenContract = getEthereumContract(
        myTokenContractAddress,
        myTokenContractABI
    );
    return await myTokenContract.name();
}

export const transferAmountToReceiver = async (receiverAddress, transferValue) => {
    const myTokenContract = getEthereumContract(
        myTokenContractAddress,
        myTokenContractABI
    );
    return await myTokenContract.transfer(receiverAddress, transferValue);
}

// export const withdrawAmountService = async () => {
//   const moneyContract = getEthereumContract(
//     moneyContractAddress,
//     moneyContractABI
//   );
//   const withdraw = await moneyContract.withdraw();
//   return withdraw;
// };