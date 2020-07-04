import * as Koa from "koa";
import Router = require("koa-router");
import RepresentanteRepositoryImpl from "../../persistence/db/mongodb/representante/RepresentanteRepositoryImpl";
import RepresentanteRepository from "../../gateways/representante/RepresentanteRepository";
import Representante from "../../entities/Representante";

const routerOpts: Router.IRouterOptions = {
  prefix: "/representantes"
};

const representanteRepository: RepresentanteRepository = new RepresentanteRepositoryImpl();

const representanteRoutes: Router = new Router(routerOpts);
representanteRoutes
  .get("/:id", async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    ctx.body(await representanteRepository.detalhar(id));
  })
  .post("/", async (ctx: any) => {
    const body = ctx.request.body;
    ctx.body = await representanteRepository.salvar(new Representante(
      body.nome,
      body.cpf,
      body.telefone,
      body.email,
      body.usuario,
      body.senha
    ));
  })
  .put("/:id/nome", async (ctx: any) => {
    const id = ctx.params.id;
    const nome: string = ctx.request.body.nome;
    ctx.body = await representanteRepository.atualizarNome(id, nome);
  })
  .put("/:id/cpf", async (ctx: any) => {
    const id = ctx.params.id;
    const cpf: string = ctx.request.body.cpf;
    ctx.body = await representanteRepository.atualizarNome(id, cpf);
  })
  .put("/:id/usuario", async (ctx: any) => {
    const id = ctx.params.id;
    const usuario: string = ctx.request.body.usuario;
    ctx.body = await representanteRepository.atualizarNome(id, usuario);
  })
  .put("/:id/senha", async (ctx: any) => {
    const id = ctx.params.id;
    const senha: string = ctx.request.body.senha;
    ctx.body = await representanteRepository.atualizarNome(id, senha);
  })
  .put("/:id/email", async (ctx: any) => {
    const id = ctx.params.id;
    const email: string = ctx.request.body.email;
    ctx.body = await representanteRepository.atualizarNome(id, email);
  })
  .put("/:id/telefone", async (ctx: any) => {
    const id = ctx.params.id;
    const telefone: string = ctx.request.body.telefone;
    ctx.body = await representanteRepository.atualizarNome(id, telefone);
  })
  .delete("/:id", async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    ctx.body = await representanteRepository.apagar(id);
  });

export default representanteRoutes;