export class User {
  public iduser?: number;
  public email?: string;
  private password?: string;
  public name?: string;
  public telefone?: string;

  constructor(iduser: number, email: string, name: string, telefone: string) {
    this.iduser = iduser;
    this.name = name;
    this.email = email;
    this.telefone = telefone;
  }
}
