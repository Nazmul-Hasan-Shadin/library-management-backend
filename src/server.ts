import { Server } from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const main = () => {
  let server: Server = app.listen(process.env.PORT, () => {
    console.log("server is listening");
  });
};

main();
