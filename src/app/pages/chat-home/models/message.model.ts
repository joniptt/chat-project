export class Message {
  public id?: number;
  public msg?: string;
  public idConv?: number;
  type?: number;
  public rem?: string;
  public dest?: string;
  constructor(msg: string, rem: string, dest: string) {
    this.msg = msg;
    this.rem = rem;
    this.dest = dest;
  }
}
