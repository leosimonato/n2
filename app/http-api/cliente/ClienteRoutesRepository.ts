export default interface ClienteRoutesRepository {

  salvar(req: any);

  detalhar(req: any);

  apagar(req: any);

  atualizarNome(req: any);

  atualizarCpf(req: any);

  atualizarEndereco(req: any);

  atualizarEmail(req: any);

  atualizarTelefone(req: any);

  atualizarUsuario(req: any);

  atualizarSenha(req: any);

}