import ClienteRepository from '../../../../gateways/cliente/ClienteRepository';
import Cliente from '../../../../entities/Cliente';
import Endereco from '../../../../entities/Endereco';
import ClienteSchema from './schema/ClienteSchema';

export default class AgendamentoRepositoryImplementation implements ClienteRepository {

   async salvar(cliente: Cliente): Promise<Cliente> {
      const clienteToSave = new ClienteSchema({
         nome: cliente.nome,
         telefone: cliente.telefone,
         usuario: cliente.usuario,
         cpf: cliente.cpf,
         senha: cliente.senha,
         endereco: {
            id: cliente.endereco.id,
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero,
            bairro: cliente.endereco.bairro,
            cidade: cliente.endereco.cidade,
            estado: cliente.endereco.estado
         }
      });
      return await clienteToSave.save();
   }

   async detalhar(id: number): Promise<Cliente> {
      return await ClienteSchema.findById(id).exec();
   }

   async apagar(id: number) {
      await ClienteSchema.findByIdAndDelete(id).exec();
   }

   async atualizarEndereco(id: number, endereco: Endereco): Promise<Cliente> {
      return await ClienteSchema.updateOne(
         { _id: id },
         {
            endereco: {
               rua: endereco.rua,
               numero: endereco.numero,
               bairro: endereco.bairro,
               cidade: endereco.cidade,
               estado: endereco.estado,
               id: endereco.id
            }
         }
      ).exec();
   }

   async atualizarNome(id: number, nome: string): Promise<Cliente> {
      return await ClienteSchema.updateOne({ _id: id }, { nome: nome }).exec();
   }

   async atualizarTelefone(id: number, telefone: string): Promise<Cliente> {
      return await ClienteSchema.updateOne({ _id: id }, { telefone: telefone }).exec();
   }

}