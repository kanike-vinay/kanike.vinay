import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { TransactionsProvider } from "../../context/TransactionContext";

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevCheck) => !prevCheck);
  };

  return (
    <TransactionsProvider>
      <Box sx={{ display: "flex" }}>
        <Topbar callback={handleDrawerToggle} />
        <Box
          component="nav"
          sx={{
            width: { sm: sizeConfigs.sidebar.width },
            flexShrink: { sm: 0 },
          }}
        >
          <Sidebar mobileOpen={mobileOpen} callback={handleDrawerToggle} />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${sizeConfigs.sidebar.width})` },
            minHeight: "100vh",
            backgroundColor: colorConfigs.mainBg,
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </TransactionsProvider>
  );
};

export default MainLayout;
