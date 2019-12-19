export class House {
  public title: string;
  public type: string;
  public description: string;
  public sold: boolean;

  constructor(input?: House) {
    Object.assign(this, input);
  }
}
