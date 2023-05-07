import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import UploadFile from "@mui/icons-material/UploadFile";
import { listNFT } from "../../../services/NFTMarketplace/ListMyNFT";

type Props = {};

const ListMyNFT = (props: Props) => {
    const [nftName, updateNftName] = useState("");
    const [description, updateDescritpion] = useState("");
    const [price, updatePrice] = useState(0);
    const [uploadFile, updateUploadFile] = useState<File[]>([]);

    const onNFTName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nftNameInput = event.target.value.toString();
        updateNftName(nftNameInput);
    }

    const onNFTDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nftDescriptionInput = event.target.value.toString();
        updateDescritpion(nftDescriptionInput);
    }

    const onNFTPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nftPriceInput = parseFloat(event.target.value);
        updatePrice(nftPriceInput);
    }

    const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { files } } = event;
        files?.length && updateUploadFile(Array.from(files));
    }

    const onClickListNFT = () => {
        const formData = {
            name : nftName,
            description,
            price,
            file: uploadFile[0]
        }
        listNFT(formData).then((response) => {
            if (response) {
                console.log("NFT Listed Successfuly");
            }
        }).catch(error => {
            console.log("Error occured while listing selected NFT ", error);
        });
    }

    return (
        <React.Fragment>
        <Paper elevation={3} sx={{ marginRight: "10%", marginLeft: "10%" }}>
            <Box sx={{ padding: 3.5 }}>
                <Typography component="div" variant="h6" gutterBottom sx={{ paddingBottom: 5, color: 'navy', textAlign: 'center' }}>
                    Upload your NFT to the Marketplace
                </Typography>
                <Grid container spacing={3} component="div">
                    <Grid item xs={12} md={2}>
                    <InputLabel
                        sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700
                        }}
                    >
                        NFT Name
                    </InputLabel>
                    </Grid>
                    <Grid item xs={12} md={10}>
                    <TextField
                        required
                        id="nftName"
                        name="nftName"
                        label="NFT Name"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        onChange={onNFTName}
                    />
                    </Grid>
                    <Grid item xs={12} md={2}>
                    <InputLabel
                        sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700
                        }}
                    >
                        Description
                    </InputLabel>
                    </Grid>
                    <Grid item xs={12} md={10}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        fullWidth
                        rows={4}
                        onChange={onNFTDescription}
                    />
                    </Grid>
                    <Grid item xs={12} md={2}>
                    <InputLabel
                        sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700
                        }}
                    >
                        Price (in ETH)
                    </InputLabel>
                    </Grid>
                    <Grid item xs={12} md={10}>
                    <TextField
                        required
                        type="number"
                        id="price"
                        name="price"
                        label="Price"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        onChange={onNFTPrice}
                    />
                    </Grid>
                    <Grid item xs={12} md={2}>
                    <InputLabel
                        sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700
                        }}
                    >
                        Upload Image
                    </InputLabel>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" onChange={onUploadFile}/>
                        <UploadFile />
                    </IconButton>
                    </Grid>
                    <Grid item xs={12} md={6} />
                    <Grid item xs={12} md={5} />
                    <Grid item xs={12} md={4}>
                    <Button variant="contained" onClick={onClickListNFT}>
                        List NFT
                    </Button>
                    </Grid>
                    <Grid item xs={12} md={5} />
                </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
}

export default ListMyNFT;