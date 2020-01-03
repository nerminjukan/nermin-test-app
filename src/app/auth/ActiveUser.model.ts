export class ActiveUser {
    constructor(
      public id: number,
      private userToken: string,
    ) {}

    get token() {
      if (!this.userToken) {
        return null;
      }
      return this.userToken;
    }
  }