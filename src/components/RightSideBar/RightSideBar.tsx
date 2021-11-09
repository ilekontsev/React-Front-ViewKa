import React from "react";

import Option from "../Option/Option";
import ListDialogues from "../ListDialogues/ListDialogues";

import style from "./RightSideBar.module.scss";

const RightSideBar = () => {
  return (
    <div className={style.wrap}>
      <Option />
      <ListDialogues />
    </div>
  );
};

export default RightSideBar;
