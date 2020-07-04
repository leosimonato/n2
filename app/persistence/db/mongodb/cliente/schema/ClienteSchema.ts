import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
      unique: true
    },
    endereco: {
      id: String,
      rua: String,
      numero: Number,
      bairro: String,
      cidade: String,
      estado: String
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
      type: Number,
      required: true,
      unique: true
    },
    senha: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  { collection: "clientes" }
);
ClienteSchema.index({ nome: 1, telefone: 1 }, { unique: true });
export default mongoose.model("Cliente", ClienteSchema);
