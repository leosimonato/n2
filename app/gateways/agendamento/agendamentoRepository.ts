import Agendamento from '../../entities/Agendamento';

export default interface AgendamentoRepository {
  salvar(representante: Agendamento);

  detalhar(id: number);

  apagar(id: number);

  atualizarCliente(id: number, cliente: string);

  atualizarData(id: number, data: string);

  atualizarHorario(id: number, horario: string);

  atualizarRepresentante(id: number, representante: string);
}