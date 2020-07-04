import * as Koa from "koa";
import RoutesRepository from '../RoutesRepository';
import RepresentanteRepository from '../../gateways/representante/RepresentanteRepository';

export default class RepresentanteRoutesRepositoryImpl implements RoutesRepository<Koa.Request> {
  constructor(private clienteRepository: RepresentanteRepository) { }

  pegarBody(req: Koa.Request) {
    return req.ctx.body;
  }

  pegarParameter(req: Koa.Request, parameter: string) {
    return req.ctx.query[parameter];
  }

  async atualizarNome(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["nome"]
    );
  }

  async atualizarCpf(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["cpf"]
    );
  }

  async atualizarTelefone(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["telefone"]
    );
  }

  async atualizarEmail(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["email"]
    );
  }

  async atualizarUsuario(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["usuario"]
    );
  }

  async atualizarSenha(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["senha"]
    );
  }

  async atualizarEndereco(req: any) {
    await this.clienteRepository.atualizarNome(
      this.pegarParameter(req, "id"), this.pegarBody(req)["endereco"]
    );
  }

  async salvar(req: any) {
    const body = this.pegarBody(req);
    await this.clienteRepository.salvar(new Cliente(
      body.nome,
      body.cpf,
      body.endereco,
      body.telefone,
      body.email,
      body.usuario,
      body.senha
    ));
  }

  async apagar(req: any) {
    await this.clienteRepository.apagar(this.pegarParameter(req, "id"));
  }

  async detalhar(req: any) {
    await this.clienteRepository.detalhar(this.pegarParameter(req, "id"));
  }

}