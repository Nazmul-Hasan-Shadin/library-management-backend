import { Server } from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const main = () => {
  let server: Server = app.listen(5000, () => {
    console.log("server is listening");
  });
};

main();
