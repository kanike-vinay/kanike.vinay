import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const DemoProjectPageLayout = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DemoProjectPageLayout;
