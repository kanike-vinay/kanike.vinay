import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getAllNFTData } from "../../../services/NFTMarketplace/Marketplace";
import { useDispatch } from "react-redux";
import { setAllNFTData } from "../../../redux/features/appStateSlice";
import NFTInfo from "./NFTInfo";

type Props = {};

const MyMarketplace = (props: Props) => {
  const [showNftInfo, setShowNftInfo] = useState(false);
  const [selectedNftInfo, setSelectedNftInfo] = useState({});
  const dispatch = useDispatch();
  const { allNFTData } = useSelector((state: RootState) => state.appState);
  const dataFetchedRef = useRef(false);

  const fetchAllNFTData = async () => {
    dataFetchedRef.current = true;
    console.log("My Marketplace Called !!");
    return await getAllNFTData();
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    fetchAllNFTData().then((res) => {
      if (typeof res !== "undefined") {
        dispatch(setAllNFTData(res));
      }
    });
  });

  const toggleDialog = () => {
    setShowNftInfo((prevCheck) => !prevCheck);
  };

  const onNFTDetail = (nftDetail: {}) => {
    console.log("Clicked :: " + JSON.stringify(nftDetail));
    toggleDialog();
    setSelectedNftInfo(nftDetail);
  };

  return (
    <Fragment>
      <Grid container spacing={{ xs: 2, md: 3 }} direction="row">
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              Top NFTs
            </Typography>
            {allNFTData && (
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {allNFTData.map((value, index) => (
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
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            onClick={() => onNFTDetail(value)}
                          >
                            View Details
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}{" "}
            {!allNFTData && (
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
      {showNftInfo && (
        <NFTInfo
          nftDetail={selectedNftInfo}
          openDialog={showNftInfo}
          closeDialog={toggleDialog}
        />
      )}
    </Fragment>
  );
};

export default MyMarketplace;
