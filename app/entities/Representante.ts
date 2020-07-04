export default class Representante {
  public id: string;
  public nome: string;
  public cpf: string;
  public telefone: string;
  public email: string;
  public usuario: string;
  public senha: string;

  constructor(nome: string, cpf: string, telefone: string, email: string, usuario: string, senha: string, id?: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
    this.usuario = usuario;
    this.senha = senha;
    if (id) this.id = id;
  }
}
