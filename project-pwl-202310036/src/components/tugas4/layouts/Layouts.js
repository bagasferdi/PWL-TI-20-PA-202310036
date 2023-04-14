import React from "react";
import Footers from "./components/footers/Footers";
import HeaderNav from "./components/headers/HeaderNav";
import ModalPopUp from "./components/modals/ModalPopUp";

export default function Layouts(props) {
  return (
    <div id="main-layout">
      <HeaderNav />

      <main style={{marginTop: "5rem"}}>{props.children}</main>

      <Footers />
      <ModalPopUp />
    </div>
  );
}
