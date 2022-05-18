import React from "react";
import Header from "./Header";

const MainLayout = (props) => {
  const { children } = props
  return (
    <React.Fragment>
      <Header />

      {children}
    </React.Fragment>
  )
}
export default MainLayout;
