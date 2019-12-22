export class House {
  public title: string;
  public category: string;
  public description: string;
  public surface: number;
  public rooms: number;
  public price: number;
  public sold: boolean;
  public photos?: any[];

  constructor(input?: House) {
    Object.assign(this, input);
  }
}
