export class NuevoUsuario {
  nombreUsuario!: string;
  userName!: string;
  correoUsuario!: string;
  passUsuario!: string;

  constructor
  (
    nombreUsuario: string,
    userName: string,
    correoUsuario: string,
    passUsuario: string
  )
  {
    this.nombreUsuario = nombreUsuario;
    this.userName = userName;
    this.correoUsuario = correoUsuario;
    this.passUsuario = passUsuario;
  }

}
