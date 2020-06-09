export class Friend {
  constructor(
    public id?: string,
    public name?: string,
    public image?: string,
    public characteristics?: string[],
    public description?: string,
    public location?: string,
    public likes?: number,
    public dislikes?: number,
    public owner?: string
  ) {}

  public static fromJSON(friend: any): Friend {
    return new Friend(
      friend.id,
      friend.name,
      friend.image,
      friend.characteristics,
      friend.description,
      friend.location,
      friend.matches,
      friend.dislikes,
      friend.owner
    );
  }
}
