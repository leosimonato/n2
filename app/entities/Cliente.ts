export default class Cliente {
  public id: string;
  public nome: string;
  public cpf: string;
  public endereco: number;
  public telefone: string;
  public email: string;
  public usuario: string;
  public senha: string;

  constructor(nome: string, cpf: string, endereco: number, telefone: string, email: string, usuario: string, senha: string, id?: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.usuario = usuario;
    this.senha = senha;
    if (id) this.id = id;
  }
}
