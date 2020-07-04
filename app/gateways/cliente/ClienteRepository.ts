import Cliente from '../../entities/Cliente';

export default interface ClienteRepository {
  salvar(cliente: Cliente);

  detalhar(id: number);

  apagar(id: number);

  atualizarEndereco(id: number, endereco: number);

  atualizarNome(id: number, nome: string);

  atualizarCpf(id: number, cpf: string);

  atualizarEmail(id: number, email: string);

  atualizarTelefone(id: number, telefone: string);

  atualizarUsuario(id: number, usuario: string);

  atualizarSenha(id: number, senha: string);
}