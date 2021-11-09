import React, { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import ChatState from "../../stories/ChatState";
import { observer } from "mobx-react";

import style from "./Chat.module.scss";

const Chat = observer(() => {
  // const [flagMove, setFlagMove] = useState(false);
  // const [mouseX, setMouseX] = useState(0);
  // const [mouseY, setMouseY] = useState(0);
  //
  // const moveElement = (e) => {
  //   console.log(55435, flagMove, e.target.getBoundingClientRect().left);
  //   console.log(55435, flagMove, e.target.getBoundingClientRect().top);
  //   if (flagMove) {
  //     setMouseY(e.pageY - (e.screenY - e.clientY));
  //     setMouseX(e.pageX - (e.screenX - e.clientX));
  //   }
  // };
  //
  // useEffect(() => {
  //   // flagMove && window.addEventListener("mousemove", moveElement);
  //   // if (!flagMove) {
  //   //   console.log("out, window ", window);
  //   //   document.removeEventListener("mousemove", moveElement);
  //   //   console.log("out", window);
  //   // } else {
  //   //   console.log("in", window);
  //   // window.addEventListener("mousemove", moveElement);
  //   if (flagMove) {
  //     console.log("STARTT EFFEFF");
  //   } else {
  //     console.log("END EFFEFF");
  //   }
  // }, [flagMove]);
  //
  // const setupFlagMove = () => {
  //   setFlagMove(true);
  // };
  // const removeFlagMove = () => {
  //   setFlagMove(false);
  //   // document.removeEventListener("mousemove", moveElement);
  // };

  return (
    <Card
      className={style.root}
      style={{ top: mouseY, left: mouseX }}
      onMouseMove={moveElement}
      onMouseOut={removeFlagMove}
    >
      <CardHeader
        onMouseDown={setupFlagMove}
        onMouseUp={removeFlagMove}
        className={style.header}
        avatar={
          <Avatar aria-label="recipe" className={style.avatar}>
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ChatState.count}
        subheader="online"
      />

      <CardContent className={style.chatContent}>
        {ChatState.messages &&
          ChatState.messages.map((item) => <div>{item.text}</div>)}
      </CardContent>

      <CardActions disableSpacing className={style.footer}>
        <AttachFileIcon />
        <input className={style.inputChat} type="text" />
        <InsertEmoticonIcon />
        <button>send</button>
      </CardActions>
    </Card>
  );
});

export default Chat;
