import express from "express";
import cors from "cors";
import { BookRoutes } from "./app/modules/Books/books.route";
import { MemberRoutes } from "./app/modules/members/member.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", BookRoutes);
app.use("/api", MemberRoutes);

export default app;
