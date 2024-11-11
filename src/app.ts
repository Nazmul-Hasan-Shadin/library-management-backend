import express from "express";
import cors from "cors";
import { BookRoutes } from "./app/modules/Books/books.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", BookRoutes);

export default app;
