export class ActiveUser {
    constructor(
      private userToken: string,
    ) {}

    get token() {
      if (!this.userToken) {
        return null;
      }
      return this.userToken;
    }
  }