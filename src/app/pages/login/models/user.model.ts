export class User {
  public id?: number;
  public email?: string;
  private password?: string;
  public name?: string;

  constructor(id: number, email: string, name: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}
