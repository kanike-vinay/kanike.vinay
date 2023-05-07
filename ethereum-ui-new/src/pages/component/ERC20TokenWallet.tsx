import React, { Fragment, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import {
  getBalance,
  getDecimals,
  getTokenName,
  transferAmountToReceiver,
} from "../../services/ERC20Token";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CircularProgress from "@mui/material/CircularProgress";
import { ethers } from "ethers";
import AlertToast from "./alert/AlertToast";

type Props = {};

const ERC20TokenWallet = (props: Props) => {
  const [tokenName, setTokenName] = useState("Token");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [receiverAmount, setReceiverAmount] = useState(0);
  const [transferHash, setTransferHash] = useState("");
  const [loader, setLoader] = useState(false);
  const { accountAddress } = useSelector((state: RootState) => state.appState);
  const [receiverAddressError, setReceiverAddressError] =
    useState<boolean>(false);
  const [amountError, setAmountError] = useState<boolean>(false);
  const [validERC20TokenFormData, setValidERC20TokenFormData] =
    useState<boolean>(false);
  const [showTransactionHash, setShowTransactionHash] =
    useState<boolean>(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const accountChangeHandler = async (newAddress) => {
    try {
      setLoader(true);
      setBalance(0);
      setDefaultAccount(newAddress);
      const balanceAddress = await getBalance(newAddress);
      const decimals = await getDecimals();
      const tokenBalance = balanceAddress / Math.pow(10, decimals);
      const tokenNameAddress = await getTokenName();
      setDefaultAccount(accountAddress);
      setTokenName(tokenNameAddress);
      setBalance(tokenBalance);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      prepareToastAlert(
        "error",
        "Error fetching account details. Please try again later.",
        true
      );
    }
  };

  useEffect(() => {
    if (ethers.utils.isAddress(accountAddress)) {
      accountChangeHandler(accountAddress);
    }
  }, [accountAddress]);

  const onChangeReceiverAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const receiverAddressInput = event.target.value.toString();
    if (ethers.utils.isAddress(receiverAddressInput)) {
      setReceiverAddress(receiverAddressInput);
      setReceiverAddressError(false);
      setValidERC20TokenFormData(true);
    } else {
      setReceiverAddressError(true);
      setValidERC20TokenFormData(false);
    }
  };

  const onChangeReceiverAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const receiverAmountInput = parseInt(event.target.value);
    if (receiverAmountInput > 0) {
      setAmountError(false);
      setReceiverAmount(receiverAmountInput);
      setValidERC20TokenFormData(true);
    } else {
      setAmountError(true);
      setValidERC20TokenFormData(false);
    }
  };

  const transferAmount = async () => {
    try {
      if (defaultAccount !== "" && receiverAddress !== defaultAccount) {
        setLoader(true);
        const txHash = await transferAmountToReceiver(
          receiverAddress,
          receiverAmount
        );
        setTransferHash(txHash.hash);
        accountChangeHandler(defaultAccount);
        setShowTransactionHash(true);
        prepareToastAlert("success", "Token transfered successfuly.", true);
      } else if (receiverAddress === defaultAccount) {
        prepareToastAlert(
          "info",
          "Connected account can not receive token. Please correct the receiver address and try again.",
          true
        );
      } else if (defaultAccount === "") {
        prepareToastAlert(
          "info",
          "Please connect to your wallet and try again.",
          true
        );
      }
    } catch (error) {
      setLoader(false);
      prepareToastAlert(
        "error",
        "Error transfering token. Please try again later.",
        true
      );
    }
  };

  const prepareToastAlert = (
    severity: string,
    toastMessage: string,
    openToast: boolean
  ) => {
    setToastType(severity);
    setToastMessage(toastMessage);
    setOpenToast(openToast);
  };

  const handleToggleToast = () => {
    setOpenToast((prevCheck) => !prevCheck);
  };

  return (
    <Fragment>
      <AlertToast
        type={toastType}
        message={toastMessage}
        openAlert={openToast}
        callback={handleToggleToast}
      />
      <Card sx={{ minWidth: 275, m: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Address: {defaultAccount}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {tokenName} Balance: {balance}
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            {loader && <CircularProgress disableShrink={true} />}
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, m: 5 }}>
        <CardContent>
          <Typography variant="h6" textAlign="center">
            Transfer Coins
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <TextField
              required
              sx={{ m: 2 }}
              label="Receiver Address"
              id="address-required"
              onChange={onChangeReceiverAddress}
              InputLabelProps={{
                shrink: true,
              }}
              error={receiverAddressError}
              helperText={receiverAddressError ? "Invalid address" : ""}
            />
            <TextField
              required
              sx={{ m: 2 }}
              id="amount-required"
              label="Send Amount"
              onChange={onChangeReceiverAmount}
              InputLabelProps={{
                shrink: true,
              }}
              error={amountError}
              helperText={amountError ? "Invalid amount" : ""}
            />
            <Button
              variant="contained"
              component="label"
              onClick={transferAmount}
              sx={{ m: 2 }}
              disabled={!validERC20TokenFormData}
            >
              Send
            </Button>
          </FormControl>
          {showTransactionHash && (
            <Typography
              sx={{ fontSize: 16, ml: 3 }}
              color="text.secondary"
              gutterBottom
            >
              Transfer Hash: {transferHash}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ERC20TokenWallet;
