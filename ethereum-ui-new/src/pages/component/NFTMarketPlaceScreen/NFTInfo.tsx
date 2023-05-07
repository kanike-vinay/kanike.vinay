import React from "react";
import {
  Button,
  Toolbar,
  Dialog,
  AppBar,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import { buyNFT } from "../../../services/NFTMarketplace/Marketplace";
import { useDispatch } from "react-redux";
import { setCurrrentProfileNFTData } from "../../../redux/features/appStateSlice";
import { ethers } from "ethers";

type Props = {
  nftDetail: {};
  openDialog: boolean;
  closeDialog: Function;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NFTInfo = (props: Props) => {
  const handleClose = () => {
    props.closeDialog();
  };
  const { accountAddress, currentProfileNFTData } = useSelector(
    (state: RootState) => state.appState
  );
  const dispatch = useDispatch();

  const purchaseNFT = async () => {
    const tokenId = props?.nftDetail["tokenId"];
    const salePrice = ethers.utils.parseUnits(
      props?.nftDetail["price"],
      "ether"
    );
    buyNFT(tokenId, salePrice)
      .then((response) => {
        if (response) {
          const newCurrentProfileNFTData = [
            ...currentProfileNFTData,
            props.nftDetail,
          ];
          newCurrentProfileNFTData["seller"] = accountAddress;
          dispatch(setCurrrentProfileNFTData(newCurrentProfileNFTData));
          alert("You successfully bought the NFT!");
          handleClose();
        }
      })
      .catch((error) => {
        console.log("Error occurred buying the NFT", error);
      });
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={props.openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              NFT Status
            </Typography>
            {accountAddress === props?.nftDetail["owner"] ||
            accountAddress === props?.nftDetail["seller"] ? (
              "You are the owner of this NFT"
            ) : (
              <Button autoFocus color="inherit" onClick={purchaseNFT}>
                Buy NFT
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Card sx={{ display: "flex", justifyContent: "center", m: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: 450 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Box
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  verticalAlign: "center",
                }}
              >
                <TextField
                  id="outlined-read-only-name"
                  label="Name"
                  defaultValue={props?.nftDetail["name"]}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  sx={{ mt: 4, mb: 3 }}
                />
                <TextField
                  id="outlined-read-only-description"
                  label="Description"
                  defaultValue={props?.nftDetail["description"]}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  id="outlined-read-only-price"
                  label="Price"
                  defaultValue={props?.nftDetail["price"]}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  id="outlined-read-only-owner"
                  label="Owner"
                  defaultValue={props?.nftDetail["owner"]}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  id="outlined-read-only-seller"
                  label="Seller"
                  defaultValue={props?.nftDetail["seller"]}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 400, height: "auto" }}
            image={props?.nftDetail["image"]}
            alt={props?.nftDetail["name"]}
          />
        </Card>
      </Dialog>
    </div>
  );
};

export default NFTInfo;
