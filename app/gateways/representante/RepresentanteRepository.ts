import Representante from '../../entities/Representante';

export default interface RepresentanteRepository {
  salvar(representante: Representante);

  detalhar(id: number);

  apagar(id: number);

  atualizarCpf(id: number, cpf: string);

  atualizarNome(id: number, nome: string);

  atualizarTelefone(id: number, telefone: string);

  atualizarUsuario(id: number, usuario: string);

  atualizarEmail(id: number, email: string);

  atualizarSenha(id: number, senha: string);
}