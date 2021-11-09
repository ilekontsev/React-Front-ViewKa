import React from "react";

import { useRouter } from "next/router";

import style from "./Home.module.scss";

const Home = () => {
  const router = useRouter();
  const handleClickLogin = () => {
    router.push("/login");
  };
  return (
    <div className={style.main}>
      <div className={style.wrap}>
        <div className={style.containerLeft}>
          <p className={style.heading}>Description</p>
          <p className={style.description}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
        </div>

        <div className={style.fence} />

        <div className={style.containerRight}>
          <p className={style.heading}>Authorization</p>
          <button className={style.buttonLogin} onClick={handleClickLogin}>
            sign-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
