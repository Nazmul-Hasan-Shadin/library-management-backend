import { Server } from "http";
import app from "./app";



const main = () => {
  let server: Server = app.listen(3000, () => {
    console.log("server is listening");
  });
};


main()