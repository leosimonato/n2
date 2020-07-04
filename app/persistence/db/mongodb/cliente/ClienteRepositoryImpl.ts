import ClienteRepository from '../../../../gateways/cliente/ClienteRepository';
import Cliente from '../../../../entities/Cliente';
import ClienteSchema from './schema/ClienteSchema';
import EnderecoSchema from '../endereco/schema/EnderecoSchema';

export default class ClienteRepositoryImpl implements ClienteRepository {

  async salvar(cliente: Cliente) {
    const clienteToSave = new ClienteSchema({
      nome: cliente.nome,
      telefone: cliente.telefone,
      usuario: cliente.usuario,
      cpf: cliente.cpf,
      senha: cliente.senha,
      endereco: cliente.endereco,
      email: cliente.email
    });
    await clienteToSave.save();
  }

  async detalhar(id: number) {
    await ClienteSchema.findById(id).exec();
  }

  async apagar(id: number) {
    await ClienteSchema.findByIdAndDelete(id).exec();
  }

  async atualizarEndereco(id: number, endereco: number) {
    await ClienteSchema.updateOne({ _id: id }, { endereco: endereco }).exec();
  }

  async atualizarNome(id: number, nome: string) {
    await ClienteSchema.updateOne({ _id: id }, { nome: nome }).exec();
  }

  async atualizarTelefone(id: number, telefone: string) {
    await ClienteSchema.updateOne({ _id: id }, { telefone: telefone }).exec();
  }

  async atualizarCpf(id: number, cpf: string) {
    await ClienteSchema.updateOne({ _id: id }, { cpf: cpf }).exec();
  }

  async atualizarEmail(id: number, email: string) {
    await ClienteSchema.updateOne({ _id: id }, { email: email }).exec();
  }

  async atualizarUsuario(id: number, usuario: string) {
    await ClienteSchema.updateOne({ _id: id }, { usuario: usuario }).exec();
  }

  async atualizarSenha(id: number, senha: string) {
    await ClienteSchema.updateOne({ _id: id }, { senha: senha }).exec();
  }

  async pegarEndereco(id: number) {
    await EnderecoSchema.findById({ _id: id }).exec();
  }

}