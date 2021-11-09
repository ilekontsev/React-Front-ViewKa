import React from "react";

import Main from "../Main/Main";

import style from "./Head.module.scss";

const Head = () => {
  return (
    <div className={style.wrap}>
      <div className={style.header} />
      <Main />
    </div>
  );
};

export default Head;
