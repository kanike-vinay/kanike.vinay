import { ethers } from "ethers";
import { getMyNFT, getTokenURI } from "../NFTMarketplace";
import axios from "axios";

let sumPrice = 0;

export const getMyNFTData = async () => {
  let items = [];
  sumPrice = 0;
  try {
    const myNFTs = await getMyNFT();
    // myNFTs = [{}];
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
      sumPrice += Number(price);
      return item;
    });
    return Promise.all(items);
  } catch (error) {
    console.log("Error occured while getting profiles' NFT data", error);
  }
};

export const getNftHolding = () => {
  return sumPrice;
};
