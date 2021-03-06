require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  // database connection
  //   mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: true,
  //   });
  //   const connection = mongoose.connection;
  //   connection
  //     .once("open", () => {
  //       console.log("Database connected.");
  //     })
  //     .catch((err) => {
  //       console.log("Connection faild.");
  //     });

  mongoose.connect(
    process.env.MONGO_CONNECTION_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        throw err;
        console.log("error" + err);
      }
      console.log("Connected to MongoDB!!!");
    }
  );
}

module.exports = connectDB;
