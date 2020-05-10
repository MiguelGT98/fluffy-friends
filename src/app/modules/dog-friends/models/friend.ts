export class Friend {
  constructor(
    public id?: string,
    public name?: string,
    public url?: string,
    public characteristics?: Array<string>,
    public description?: string,
    public location?: string,
    public matches?: number
  ) {}

  public static fromJSON(friend: any): Friend {
    return new Friend(
      friend.id,
      friend.name,
      friend.url,
      friend.characteristics,
      friend.description,
      friend.location,
      friend.matches
    );
  }
}
