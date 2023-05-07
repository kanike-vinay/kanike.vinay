import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import { Fragment } from "react";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

type Props = {
  mobileOpen: boolean;
  callback: Function;
};

const Sidebar = (props: Props) => {
  const handleDrawerToggle = () => {
    props.callback();
  };
  return (
    <Fragment>
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sizeConfigs.sidebar.width,
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: colorConfigs.sidebar.bg,
            color: colorConfigs.sidebar.color,
          },
        }}
      >
        <List disablePadding>
          <Toolbar>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="center"
            >
              <Avatar src={assets.images.logo} />
            </Stack>
          </Toolbar>
          {appRoutes.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sizeConfigs.sidebar.width,
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: colorConfigs.sidebar.bg,
            color: colorConfigs.sidebar.color,
          },
        }}
      >
        <List disablePadding>
          <Toolbar>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="center"
            >
              <Avatar src={assets.images.logo} />
            </Stack>
          </Toolbar>
          {appRoutes.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;
