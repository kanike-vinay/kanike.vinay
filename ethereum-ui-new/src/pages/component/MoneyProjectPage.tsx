import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import {
  depositAmountService,
  withdrawAmountService,
} from "../../services/Money";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/features/appStateSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AlertToast from "./alert/AlertToast";
import { ethers } from "ethers";

type Props = {};

const MoneyProjectPage = (props: Props) => {
  const [amount, setAmount] = useState("");
  const [withdrawedAmount, setWithdrawedAmount] = useState("");
  const dispatch = useDispatch();

  const [amountError, setAmountError] = useState<boolean>(false);
  const [validFormData, setValidFormData] = useState<boolean>(false);
  const [isDepositSuccess, setDepositSuccess] = useState<boolean>(false);

  const [showWithdrawAmount, setShowWithdrawAmount] = useState<boolean>(false);
  const { loaderState, accountAddress } = useSelector(
    (state: RootState) => state.appState
  );
  const [openToast, setOpenToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const depositAmount = async () => {
    try {
      if (accountAddress !== "" || ethers.utils.isAddress(accountAddress)) {
        setDepositSuccess(false);
        dispatch(setLoader(true));
        await depositAmountService(amount);
        setDepositSuccess(true);
        setShowWithdrawAmount(false);
        dispatch(setLoader(false));
        prepareToastAlert("success", "Amount deposited successfully.", true);
      } else {
        prepareToastAlert(
          "info",
          "Please connect to your wallet and try again.",
          true
        );
      }
    } catch (error) {
      dispatch(setLoader(false));
      prepareToastAlert(
        "error",
        "Error depositing the amount. Please try again later.",
        true
      );
    }
  };

  const withdrawAmount = async () => {
    try {
      if (accountAddress !== "" || ethers.utils.isAddress(accountAddress)) {
        dispatch(setLoader(true));
        const withdrawAmount = await withdrawAmountService();
        setWithdrawedAmount(withdrawAmount);
        dispatch(setLoader(false));
        setShowWithdrawAmount(true);
        prepareToastAlert("success", "Amount fetched.", true);
      } else {
        prepareToastAlert(
          "info",
          "Please connect to your wallet and try again.",
          true
        );
      }
    } catch (error) {
      dispatch(setLoader(false));
      prepareToastAlert(
        "error",
        "Error withdrawing the amount. Please try again later.",
        true
      );
    }
  };

  const setAndValidateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseInt(event.target.value);
    if (!event.target.value || inputAmount <= 0) {
      setAmountError(true);
      setValidFormData(false);
    } else if (parseInt(event.target.value) > 0) {
      setAmount(event.target.value);
      setAmountError(false);
      setValidFormData(true);
    }
    event.preventDefault();
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
    <React.Fragment>
      <AlertToast
        type={toastType}
        message={toastMessage}
        openAlert={openToast}
        callback={handleToggleToast}
      />
      <Typography variant="h5" component="h5" align="center">
        Deposit Money and Withdraw twice the amount you deposited!
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <TextField
          required
          id="filled-required"
          label="Amount"
          defaultValue={amount}
          onChange={setAndValidateAmount}
          InputLabelProps={{
            shrink: true,
          }}
          error={amountError}
          helperText={amountError ? "Invalid amount" : ""}
        />
        <Button
          variant="contained"
          component="label"
          onClick={depositAmount}
          sx={{ m: 2 }}
          disabled={!validFormData}
        >
          Deposit
        </Button>
        <Button
          variant="contained"
          component="label"
          onClick={withdrawAmount}
          sx={{ m: 2 }}
          disabled={!isDepositSuccess}
        >
          Withdraw
        </Button>
        <Box sx={{ display: "flex" }}>
          {loaderState && <CircularProgress disableShrink={true} />}
        </Box>
        {showWithdrawAmount && isDepositSuccess && (
          <Typography variant="h6" component="h6" align="left">
            Congratulation, You earned {String(withdrawedAmount)}
          </Typography>
        )}
      </FormControl>
    </React.Fragment>
  );
};

export default MoneyProjectPage;
