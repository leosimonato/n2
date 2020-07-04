import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const AgendamentoSchema = new Schema(
   {
      data: {
         type: String,
         required: true,
         unique: true
      },
      horario: {
         type: String,
         required: true,
         unique: true
      },
      representante: {
         type: Number,
         required: true
      },
      cliente: {
         type: Number,
         required: true,
         unique: true
      }
   },
   { collection: "agendamento" }
);
export default mongoose.model("Agendamento", AgendamentoSchema);
