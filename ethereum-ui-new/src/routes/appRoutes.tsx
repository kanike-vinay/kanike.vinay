import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DemoProjectPageLayout from "../pages/component/DemoProjectPageLayout";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import MoneyProjectPage from "../pages/component/MoneyProjectPage";
import ERC20TokenWallet from "../pages/component/ERC20TokenWallet";
import NFTMarketplace from "../pages/component/NFTMarketPlace";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },

  {
    path: "/demo",
    element: <DemoProjectPageLayout />,
    state: "demo",
    sidebarProps: {
      displayText: "Demo Project",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/demo/money",
        element: <MoneyProjectPage />,
        state: "demo.money",
        sidebarProps: {
          displayText: "Simple Smart Contract",
        },
      },
      {
        path: "/demo/erc20wallet",
        element: <ERC20TokenWallet />,
        state: "demo.erc20wallet",
        sidebarProps: {
          displayText: "ERC-20 Wallet",
        },
      },
      {
        path: "/demo/nftMarketplace",
        element: <NFTMarketplace />,
        state: "demo.nftMarketplace",
        sidebarProps: {
          displayText: "NFT Marketplace",
        },
      },
    ],
  },
];

export default appRoutes;
