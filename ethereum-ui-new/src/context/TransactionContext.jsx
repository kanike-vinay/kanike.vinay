import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccountAddress } from "../redux/features/appStateSlice";

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [metaMaskErrorMessage, setMetaMaskErrorMessage] = useState("");
  const [showMetaMaskDialog, setShowMetaMaskDialog] = useState(false);
  const dispatch = useDispatch();

  const getEthereumWindowObject = () => {
    return ethereum;
  };

  // if (getEthereumWindowObject()) {
  //     getEthereumWindowObject().on('accountsChanged', function (accounts) {
  //         console.log("Account changed - Transaction Context");
  //         connectWalletV2();
  //     })
  // }

  const getEthereumContract = (contractAddress, contractABI) => {
    if (checkIfWalletIsConnectV2()) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      return contract;
    }
  };

  const checkIfWalletIsConnectV2 = () => {
    try {
      return ethereum ? true : false;
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return;
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        const getCurrentAddress = await getAddress();
        if (getCurrentAddress) {
          dispatch(setAccountAddress(getCurrentAddress));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWalletV2 = async () => {
    if (checkIfWalletIsConnectV2() && isEthereumConnected()) {
      connectNFTMarketPlaceToWallet()
        .then((accounts) => {
          if (accounts) {
            getAddress()
              .then((address) => {
                if (address) {
                  dispatch(setAccountAddress(address));
                }
              })
              .catch((error) => {
                console.log("Error occurred fetching address" + error);
              });
          }
        })
        .catch((error) => {
          console.log("Error occurred fetching account" + error);
        });
    } else {
      setShowMetaMaskDialog(true);
      setMetaMaskErrorMessage("Please install MetaMask");
    }
  };

  const turnOffShowMetaMaskDialog = () => {
    setShowMetaMaskDialog(false);
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  });

  const getAccounts = () => {
    return ethereum.request({ method: "eth_requestAccounts" });
  };

  const getAccountsAsync = async () => {
    return await ethereum.request({ method: "eth_requestAccounts" });
  };

  const getAddress = async () => {
    if (checkIfWalletIsConnect()) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      return await signer.getAddress();
    }
  };

  const connectNFTMarketPlaceToWallet = async () => {
    switchToGoerliNetwork();
    return await getAccountsAsync();
  };

  const isEthereumConnected = () => {
    return ethereum.isConnected();
  };

  const switchToGoerliNetwork = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== "0x5") {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }],
      });
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        getEthereumWindowObject,
        getEthereumContract,
        connectWalletV2,
        currentAccount,
        getAccounts,
        getAccountsAsync,
        getAddress,
        connectNFTMarketPlaceToWallet,
        isEthereumConnected,
        checkIfWalletIsConnectV2,
        metaMaskErrorMessage,
        showMetaMaskDialog,
        turnOffShowMetaMaskDialog,
        setShowMetaMaskDialog,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
