import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useReqAuth } from "../api/Oauth/ReqOauth";

const Authentication = () => {
  const router = useRouter();
  const [flag, setFlag] = useState(false);
  const { data, error, isLoading } = useReqAuth(flag);

  useEffect(() => {
    setFlag(true);
    if (data?.data.user) {
      localStorage.setItem("token", data.data.token);
      router.push("/message/" + data.data.user);
    } else if (error) {
      router.push("/login");
    }
  }, [data?.data || error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div />;
};

export default Authentication;
