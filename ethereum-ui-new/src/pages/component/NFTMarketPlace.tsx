import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import MyMarketplace from "./NFTMarketPlaceScreen/MyMarketplace";
import ListMyNFT from "./NFTMarketPlaceScreen/ListMyNFT";
import Profile from "./NFTMarketPlaceScreen/Profile";


type Props = {};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nft-marketplace-tabpanel-${index}`}
        aria-labelledby={`nft-marketplace-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

const NFTMarketplace = (props: Props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box 
        // sx={{ bgcolor: 'background.paper'}}
        component="span"
        >
        <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="NFT Marketplace tabs"
        >
            <Tab label="Marketplace"/>
            <Tab label="List My NFT "/>
            <Tab label="Profile"/>
        </Tabs>
        <TabPanel value={value} index={0}>
            <MyMarketplace />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <ListMyNFT />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Profile />
        </TabPanel>
        </Box>
    );
}

export default NFTMarketplace;