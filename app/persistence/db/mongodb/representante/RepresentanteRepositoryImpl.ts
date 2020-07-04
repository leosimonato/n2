import RepresentanteRepository from '../../../../gateways/representante/RepresentanteRepository';
import Representante from '../../../../entities/Representante';
import RepresentanteSchema from './schema/RepresentanteSchema';

export default class RepresentanteRepositoryImpl implements RepresentanteRepository {

  async salvar(representante: Representante) {
    const representanteToSave = new RepresentanteSchema({
      nome: representante.nome,
      telefone: representante.telefone,
      usuario: representante.usuario,
      cpf: representante.cpf,
      senha: representante.senha
    });
    await representanteToSave.save();
  }

  async detalhar(id: number) {
    await RepresentanteSchema.findById(id).exec();
  }

  async apagar(id: number) {
    await RepresentanteSchema.findByIdAndDelete(id).exec();
  }

  async atualizarNome(id: number, nome: string) {
    await RepresentanteSchema.updateOne({ _id: id }, { nome: nome }).exec();
  }

  async atualizarTelefone(id: number, telefone: string) {
    await RepresentanteSchema.updateOne({ _id: id }, { telefone: telefone }).exec();
  }

  async atualizarCpf(id: number, cpf: string) {
    await RepresentanteSchema.updateOne({ _id: id }, { cpf: cpf }).exec();
  }

  async atualizarEmail(id: number, email: string) {
    await RepresentanteSchema.updateOne({ _id: id }, { email: email }).exec();
  }

  async atualizarUsuario(id: number, usuario: string) {
    await RepresentanteSchema.updateOne({ _id: id }, { usuario: usuario }).exec();
  }

  async atualizarSenha(id: number, senha: string) {
    await RepresentanteSchema.updateOne({ _id: id }, { senha: senha }).exec();
  }

}