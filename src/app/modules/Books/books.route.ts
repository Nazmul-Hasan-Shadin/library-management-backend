import express from "express";
import { BooksController } from "./books.controller";

const router = express.Router();

router.get("/books", BooksController.getAllBook);

router.post("/books", BooksController.createBook);

router.get("/books/:bookId", BooksController.getSingleBook);
router.put("/books/:bookId", BooksController.updateBook);
router.delete("/books/:bookId", BooksController.deleteBook);

export const BookRoutes = router;
