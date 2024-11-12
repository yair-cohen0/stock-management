import { action, makeObservable, observable } from "mobx";

class UserStore {
  userName: string | null = null;
  setUserName(userName: string) {
    this.userName = userName;
  }

  constructor() {
    makeObservable(this, {
      userName: observable,
      setUserName: action,
    });
  }
}

export const userStore = new UserStore();
