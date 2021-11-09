import React from "react";

import { useRouter } from "next/router";

import style from "./Login.module.scss";

const Login = () => {
  const router = useRouter();
  const handleClickAuth = () => {
    router.push("/authentication");
  };
  return (
    <div className={style.main}>
      <button className={style.buttonLogin} onClick={handleClickAuth}>
        войти через вк
      </button>
    </div>
  );
};

export default Login;
