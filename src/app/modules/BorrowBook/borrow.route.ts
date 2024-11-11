import express from "express";
import { BorrowController } from "./borrow.controller";

const router = express.Router();

router.post("/borrow", BorrowController.borrowBook);
router.post("/return", BorrowController.returnBook);
router.get("/borrow/overdue", BorrowController.getOverdueBooks);

export const BorrowRoutes = router;
