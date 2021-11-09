import React from "react";

import Head from "../Head/Head";
import RightSideBar from "../RightSideBar/RightSideBar";

import style from "./Message.module.scss";

import ContainerChat from "../ContainerChat/ContainerChat";

const Message = () => {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        {/* <Head /> */}

        <ContainerChat />

        <RightSideBar />
      </div>
    </div>
  );
};

export default Message;
