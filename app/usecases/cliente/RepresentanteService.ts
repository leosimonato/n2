import RepresentanteRepository from '../../gateways/Representante/RepresentanteRepository';
import Representante from '../../entities/Representante';

export default class RepresentanteService {
   constructor(private representanteRepository: RepresentanteRepository) { }

   async salvar(representante: Representante) {
      await this.representanteRepository.salvar(representante);
   }

   async apagar(id: number) {
      await this.representanteRepository.apagar(id);
   }
}
