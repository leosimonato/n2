import ClienteRepository from '../../gateways/cliente/ClienteRepository';
import Cliente from '../../entities/Cliente';

export default class ClienteService {
   constructor(private clienteRepository: ClienteRepository) { }

   async salvar(cliente: Cliente) {
      await this.clienteRepository.salvar(cliente);
   }

   async apagar(id: number) {
      await this.clienteRepository.apagar(id);
   }
}
