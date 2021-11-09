import React, { useEffect, useState } from "react";

import { useListDialogues } from "../api/ReqServer/ReqServer";
import Dialog from "../Dialog/Dialog";
import ChatState from "../../stories/ChatState";

import style from "./ListDialogues.module.scss";
import { observer } from "mobx-react";

const ListDialogues = observer(() => {
  const [token, setToken] = useState("");
  const { data, error } = useListDialogues(token);

  useEffect(() => {
    const getToken = localStorage.getItem("token" || "");
    if (getToken) {
      setToken(getToken);
    }
  }, []);

  if (data) {
    ChatState.pushMessage(data.data);
  }
  return (
    <div className={style.wrap}>
      <div className={style.heading}>List</div>
      {data?.data &&
        data.data.map((item, index) => (
          <Dialog key={item.id + index} info={item} />
        ))}
    </div>
  );
});

export default ListDialogues;
