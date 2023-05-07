import { ethers } from "ethers";
import { getAllNFT, getTokenURI, pruchaseNFT } from "../NFTMarketplace";
import axios from "axios";

export const getAllNFTData = async () => {
  let items = [];
  try {
    const myNFTs = await getAllNFT();
    items = await myNFTs.map(async (i) => {
      const tokenURI = await getTokenURI(i.tokenId);
      let meta = await axios.get(tokenURI, {
        headers: {
          Accept: "text/plain",
        },
      });
      // let meta = {
      //     "data": {
      //         "nftName": "Dog#1",
      //         "description": "My First Dog NFT",
      //         "price": 0.0002,
      //         "image": "https://gateway.pinata.cloud/ipfs/Qma3KTxJfpdw39K61BXun4xKVKpKGNaU7FAABgCr7BrSab"
      //     },
      // }
      meta = meta.data;

      let price = ethers.utils.formatUnits(i.price.toString(), "ether");
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.image,
        name: meta.nftName,
        description: meta.description,
      };
      return item;
    });
    return Promise.all(items);
  } catch (error) {
    console.log("Error occurred while getting profiles' NFT data", error);
  }
};

export const buyNFT = async (tokenId, salesPrice) => {
  try {
    const nftPurchase = await pruchaseNFT(tokenId, salesPrice);
    await nftPurchase.wait();
    return true;
  } catch (error) {
    console.log("Error occurred buying the NFT", error);
  }
};
