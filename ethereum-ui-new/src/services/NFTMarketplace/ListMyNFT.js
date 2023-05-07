import { uploadFileToIPFS, uploadJSONToIPFS } from "../Pinata";
import { ethers } from "ethers";
import { getListPrice, createToken } from "../NFTMarketplace";

export const uploadMetadata = async (nftName, description, price, fileURL) => {
    if( !nftName || !description || !price || !fileURL) {
        return;
    }
    const nftJSON = {
        nftName, description, price, image: fileURL
    }
    try {
        //upload the metadata JSON to IPFS
        const response = await uploadJSONToIPFS(nftJSON);
        if (response.success === true) {
            console.log("Uploaded JSON to Pinata: ", response);
            return response.pinataURL;
        }
    } catch (error) {
        console.log("error uploading JSON metadata :: ", error);
    }
}

export const uploadFile = async (file) => {
    try {
        //upload the file to IPFS
        const response = await uploadFileToIPFS(file);
        if (response.success === true) {
            console.log("Uploaded image to Pinata: ", response.pinataURL)
            return response.pinataURL;
        }
    } catch (error) {
        console.log("Error during file upload :: ", error);
    }
}

export const listNFT = async (formData) => {
    //Upload data to IPFS
    let isSuccess = false;
    try {
        const nameInput = formData.name;
        const descriptionInput = formData.description;
        const priceInput = formData.price;
        const fileInput = formData.file;
        const fileURL = await uploadFile(fileInput);
        const metadataURL = await uploadMetadata(nameInput, descriptionInput, priceInput, fileURL);
       
        //massage the params to be sent to the create NFT request
        const price = ethers.utils.parseUnits(priceInput.toString(), 'ether');
        let listingPrice = await getListPrice();
        listingPrice = listingPrice.toString();

        //actually create the NFT
        await createToken(metadataURL, price, listingPrice);
        alert("Successfully listed your NFT!");
        isSuccess = true;
        return isSuccess;
    } catch (error) {
        console.log("Error while listing NFT :: ", error);
    }
}