import * as Koa from "koa";
import Router = require("koa-router");
import ClienteRepository from "../../gateways/cliente/ClienteRepository";
import Cliente from "../../entities/Cliente";
import ClienteRepositoryImpl from "../../persistence/db/mongodb/cliente/ClienteRepositoryImpl";

const routerOpts: Router.IRouterOptions = {
  prefix: "/clientes"
};

const clienteRepository: ClienteRepository = new ClienteRepositoryImpl();

const clienteRoutes: Router = new Router(routerOpts);
clienteRoutes
  .get("/:id", async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    ctx.body(await clienteRepository.detalhar(id));
  })
  .post("/", async (ctx: any) => {
    const body = ctx.request.body;
    ctx.body = await clienteRepository.salvar(new Cliente(
      body.nome,
      body.cpf,
      body.endereco,
      body.telefone,
      body.email,
      body.usuario,
      body.senha
    ));
  })
  .put("/:id/nome", async (ctx: any) => {
    const id = ctx.params.id;
    const nome: string = ctx.request.body.nome;
    ctx.body = await clienteRepository.atualizarNome(id, nome);
  })
  .put("/:id/cpf", async (ctx: any) => {
    const id = ctx.params.id;
    const cpf: string = ctx.request.body.cpf;
    ctx.body = await clienteRepository.atualizarNome(id, cpf);
  })
  .put("/:id/usuario", async (ctx: any) => {
    const id = ctx.params.id;
    const usuario: string = ctx.request.body.usuario;
    ctx.body = await clienteRepository.atualizarNome(id, usuario);
  })
  .put("/:id/senha", async (ctx: any) => {
    const id = ctx.params.id;
    const senha: string = ctx.request.body.senha;
    ctx.body = await clienteRepository.atualizarNome(id, senha);
  })
  .put("/:id/email", async (ctx: any) => {
    const id = ctx.params.id;
    const email: string = ctx.request.body.email;
    ctx.body = await clienteRepository.atualizarNome(id, email);
  })
  .put("/:id/telefone", async (ctx: any) => {
    const id = ctx.params.id;
    const telefone: string = ctx.request.body.telefone;
    ctx.body = await clienteRepository.atualizarNome(id, telefone);
  })
  .put("/:id/endereco", async (ctx: any) => {
    const id = ctx.params.id;
    const endereco: string = ctx.request.body.endereco;
    ctx.body = await clienteRepository.atualizarNome(id, endereco);
  })
  .delete("/:id", async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    ctx.body = await clienteRepository.apagar(id);
  });

export default clienteRoutes;