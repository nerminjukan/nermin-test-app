
export class User {
  public id: number;
  public email: string;
  public first_name: string;
  public last_name: string;
  public avatar: string;

  constructor(id: number, email: string, firstName: string, lastName: string, avatar: string ) {
    this.id = id;
    this.email = email;
    this.first_name = firstName;
    this.last_name = lastName;
    this.avatar = avatar;
  }
}
