import React from "react";
import Image from "next/image";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.wrap}>
          <div className={style.logo}>
            <Image src="/favicon.ico" width={32} height={32} />
          </div>

          <div className={style.userAvatar}>
            <Image src="/favicon.ico" width={32} height={32} />
          </div>
        </div>
      </div>
      <div className={style.block} />
    </>
  );
};

export default Header;
