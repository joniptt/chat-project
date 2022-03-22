export class User {
  public id?: number;
  public name?: string;
  private password?: string;
  public email?: string;
  public telefone?: string;

  constructor(id: number, email: string, name: string, telefone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telefone = telefone;
  }
}
