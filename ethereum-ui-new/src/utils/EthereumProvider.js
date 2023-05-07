import { ethers } from "ethers";

const { ethereum } = window;

export const getEthereumWindowObject = () => {
  return ethereum;
}

export const getEthereumContract = (contractAddress, contractABI) => {
  if (checkIfWalletIsConnect()) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  }
};

export const checkIfWalletIsConnect = () => {
  try {
    return ethereum ? true : false;
  } catch (error) {
    console.log(error);
  }
};

export const getAccounts = () => {
  return ethereum.request({method: 'eth_requestAccounts'});
};

export const getAccountsAsync = async () => {
  return await ethereum.request({method: 'eth_requestAccounts'});
};

export const getAddress = async () => {
  if (checkIfWalletIsConnect()) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return await signer.getAddress();
  }
};

export const connectNFTMarketPlaceToWallet = async () => {
  switchToGoerliNetwork();
  return await getAccountsAsync();
}

export const isEthereumConnected = () => {
  return ethereum.isConnected();
};

export const switchToGoerliNetwork = async () => {
  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  if (chainId !== '0x5') {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x5' }],
    })
  }
}
