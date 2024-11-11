import express from "express";
import cors from "cors";
import { BookRoutes } from "./app/modules/Books/books.route";
import { MemberRoutes } from "./app/modules/members/member.route";
import { BorrowRoutes } from "./app/modules/BorrowBook/borrow.route";
import globlaErrorHandler from "./middleware/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());




app.use("/api", BookRoutes);
app.use("/api", MemberRoutes);
app.use("/api",BorrowRoutes );


app.use(globlaErrorHandler);


export default app;
