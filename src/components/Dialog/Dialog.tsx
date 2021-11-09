import React, { useState } from "react";

import { DialogProps } from "../../Interfaces";

import { getMonthYear } from "../Utils/Utils";

import style from "./Dialog.module.scss";
import { useGetMessageUser } from "../api/ReqServer/ReqServer";

const Dialog = (props: DialogProps) => {
  const [userId, setUserId] = useState();
  const [token, setToken] = useState("");
  const { data, error } = useGetMessageUser(token, userId);

  const { first_name, last_name, photo_50, online, last_seen, id } = props.info;
  const getDate = new Date(last_seen.time * 1000);
  const date = getDate.getDate() + " " + getMonthYear(getDate);
  const dateTime = getDate.getHours() + ":" + getDate.getMinutes();

  const selectDialog = (id) => {
    console.log(id);
    const getToken = localStorage.getItem("token" || "");
    if (getToken) {
      setToken(getToken);
      setUserId(id);
    }
  };

  return (
    <div className={style.wrap} onClick={() => selectDialog(id)}>
      <div>
        <img src={photo_50} alt="avatar user" />
      </div>
      <div>
        <div>{first_name + " " + last_name}</div>
        {online ? (
          <div>online</div>
        ) : (
          <div>
            <div>
              was online {date} {dateTime}
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default Dialog;
