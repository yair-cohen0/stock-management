import { action, makeObservable, observable } from "mobx";

class UserStore {
  username: string | null = null;
  setUserName(username: string) {
    this.username = username;
  }

  constructor() {
    makeObservable(this, {
      username: observable,
      setUserName: action,
    });
  }
}

export const userStore = new UserStore();
