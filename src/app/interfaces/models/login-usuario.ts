export class LoginUsuario {
  userName!: string;
  passUsuario!: string;

  constructor(userName: string, passUsuario: string){
    this.userName = userName;
    this.passUsuario = passUsuario;
  }
}
