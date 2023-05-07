import { getEthereumContract } from "../utils/EthereumProvider";
import {
  nftMarketplaceContractABI,
  nftMarketplaceContractAddress,
} from "../utils/constants";

export const getListPrice = async (address) => {
  const nftMarketplaceContract = getEthereumContract(
    nftMarketplaceContractAddress,
    nftMarketplaceContractABI
  );
  const listPrice = await nftMarketplaceContract.getListPrice();
  return listPrice;
};

export const createToken = async (metadataURL, price, listingPrice) => {
  const nftMarketplaceContract = getEthereumContract(
    nftMarketplaceContractAddress,
    nftMarketplaceContractABI
  );
  let transaction = await nftMarketplaceContract.createToken(
    metadataURL,
    price,
    { value: listingPrice }
  );
  await transaction.wait();
};

export const getMyNFT = async () => {
  const nftMarketplaceContract = getEthereumContract(
    nftMarketplaceContractAddress,
    nftMarketplaceContractABI
  );
  const myNFT = await nftMarketplaceContract.getMyNFTs();
  return myNFT;
};

export const getTokenURI = async (tokenId) => {
  const nftMarketplaceContract = getEthereumContract(
    nftMarketplaceContractAddress,
    nftMarketplaceContractABI
  );
  const tokenURI = await nftMarketplaceContract.tokenURI(tokenId);
  return tokenURI;
};

export const getAllNFT = async () => {
  const nftMarketplaceContract = getEthereumContract(
    nftMarketplaceContractAddress,
    nftMarketplaceContractABI
  );
  const allNFT = await nftMarketplaceContract.getAllNFTs();
  return allNFT;
};

export const pruchaseNFT = async (tokenId, salePrice) => {
  const nftMarketplaceContract = getEthereumContract(
    nftMarketplaceContractAddress,
    nftMarketplaceContractABI
  );
  let purchaseNFTTxn = await nftMarketplaceContract.executeSale(tokenId, {
    value: salePrice,
    gasLimit: 10000000,
  });
  return purchaseNFTTxn;
};
