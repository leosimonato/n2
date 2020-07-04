import * as mongoose from "mongoose";

const URL_CONNECTION = "mongodb://localhost:27017/";

const mongoDb = async () => {
   mongoose.connect(URL_CONNECTION, { useNewUrlParser: true, useCreateIndex: true }, err => {
      if (err) console.log(err);

      console.log("Connection =>", mongoose.connection.readyState);
   });
};

export default mongoDb;