export default class User {

  username: string;
  name: string;
  email: string;

  constructor(name: string, username: string, email: string) {
    this.name = name;
    this.username = username;
    this.email = email;
  }

  getUsername() {
    return this.username;
  }

  getName() {
    return this.name;
  }
}
