import agendamentoRepository from '../../gateways/agendamento/agendamentoRepository';
import Agendamento from '../../entities/Agendamento';

export default class AgendamentoService {
   constructor(private agendamentoRepository: agendamentoRepository) { }

   async salvar(agendamento: Agendamento) {
      await this.agendamentoRepository.salvar(agendamento);
   }

   async apagar(id: number) {
      await this.agendamentoRepository.apagar(id);
   }
}
