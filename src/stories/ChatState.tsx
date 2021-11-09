import { observable, action, computed, makeAutoObservable } from "mobx";

class ChatState {
  count = 0;
  messages = [];
  constructor() {
    makeAutoObservable(this);
  }

  pushMessage = (mes) => {
    this.messages = mes;
  };

  increment = () => {
    this.count += 1;
  };
}

export default new ChatState();
