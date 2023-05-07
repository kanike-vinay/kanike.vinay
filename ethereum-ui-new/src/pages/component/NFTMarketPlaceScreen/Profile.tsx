import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getMyNFTData,
  getNftHolding,
} from "../../../services/NFTMarketplace/Profile";
import { useDispatch } from "react-redux";
import { setCurrrentProfileNFTData } from "../../../redux/features/appStateSlice";
// import { TransactionContext } from "../../../context/TransactionContext";

type Props = {};

const Profile = (props: Props) => {
  const dispatch = useDispatch();
  const { accountAddress, currentProfileNFTData } = useSelector(
    (state: RootState) => state.appState
  );
  const [totalPrice, updateTotalPrice] = useState("0");
  const dataFetchedRef = useRef(false);
  // const {
  //     getEthereumWindowObject,
  // } = useContext(TransactionContext);

  const fetchMyNFTData = async () => {
    dataFetchedRef.current = true;
    console.log("Called !!");
    return await getMyNFTData();
  };

  // if (getEthereumWindowObject()) {
  //     getEthereumWindowObject().on('accountsChanged', function (accounts) {
  //         console.log("Account changed - Profile");
  //     })
  // }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    fetchMyNFTData().then((res) => {
      if (typeof res !== "undefined") {
        const price = getNftHolding();
        updateTotalPrice(price.toString());
        dispatch(setCurrrentProfileNFTData(res));
      }
    });
  });

  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} direction="row">
        <Grid item xs={12} sm={12} md={12}>
          <Box textAlign="center">
            <Typography textAlign="center">Wallet Address</Typography>
            <Typography>{accountAddress ? accountAddress : "0x"}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Box textAlign="center">
            <Typography>Number of NFTs</Typography>
            <Typography>{currentProfileNFTData?.length}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Box textAlign="center">
            <Typography>Total Value</Typography>
            <Typography>{totalPrice} ETH</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} direction="row">
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              Your NFTs
            </Typography>
            {currentProfileNFTData.length > 0 && (
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {currentProfileNFTData.map((value, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="auto"
                            image={value["image"]}
                            alt="name"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {value["name"]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {value["description"]}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}{" "}
            {currentProfileNFTData.length === 0 && (
              <Typography
                sx={{ fontSize: 16, p: 3, m: 0 }}
                color="text.primary"
                gutterBottom
              >
                Oops, No NFT data to display (Are you logged in?)
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
