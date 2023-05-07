import { Fragment, useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { Box, Button } from "@mui/material";
import ErrorDialog from "../../pages/component/errorDialog/ErrorDialog";
import { TransactionContext } from "../../context/TransactionContext";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  callback: Function;
};

const Topbar = (props: Props) => {
  const handleDrawerToggle = () => {
    props.callback();
  };

  const {
    currentAccount,
    connectWalletV2,
    metaMaskErrorMessage,
    showMetaMaskDialog,
    turnOffShowMetaMaskDialog,
  } = useContext(TransactionContext);

  return (
    <Fragment>
      <ErrorDialog
        title={metaMaskErrorMessage}
        description=""
        openDialog={showMetaMaskDialog}
        callback={turnOffShowMetaMaskDialog}
      />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${sizeConfigs.sidebar.width})` },
          ml: sizeConfigs.sidebar.width,
          boxShadow: "unset",
          backgroundColor: colorConfigs.topbar.bg,
          color: colorConfigs.topbar.color,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Ethereum Development</Typography>
          <div />
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              component="label"
              onClick={connectWalletV2}
              sx={{ m: "100" }}
              disabled={currentAccount}
            >
              {currentAccount ? "Wallet Connected" : "Connect Wallet"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Topbar;
