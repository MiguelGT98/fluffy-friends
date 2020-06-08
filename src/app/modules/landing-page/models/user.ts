export class User {
  constructor(
    public id?: string,
    public username?: string,
    public email?: string,
    public avatar?: string,
    public names?: string,
    public lastNames?: string
  ) {}

  public static fromJSON(user: any): User {
    return new User(
      user.id,
      user.username,
      user.email,
      user.avatar,
      user.names,
      user.lastNames
    );
  }
}
