import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const RepresentanteSchema = new Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  telefone: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  }
}, { collection: "representante" });
export default mongoose.model("Representante", RepresentanteSchema);
