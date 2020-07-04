import Endereco from '../../entities/Endereco';

export default interface EnderecoRepository {
  salvar(endereco: Endereco);

  detalhar(id: number);

  apagar(id: number);

  atualizarCliente(id: number, cliente: string);

  atualizarData(id: number, data: string);

  atualizarHorario(id: number, horario: string);

  atualizarRepresentante(id: number, endereco: string);

  
}