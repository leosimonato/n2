import Cliente from "./Cliente";
import Representante from "./Representante";

export default class Agendamento {
   public id: string;
   public cliente: Cliente;
   public data: string;
   public horario: string;
   public representante: Representante;

   constructor(cliente: Cliente, representante: Representante, data: string, horario: string, id?: string) {
      if (id) this.id = id;
      this.cliente = cliente;
      this.data = data;
      this.cliente = cliente;
      this.horario = horario;
      this.representante = representante;
   }
}
