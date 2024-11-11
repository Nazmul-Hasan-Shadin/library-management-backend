"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.get("/books", books_controller_1.BooksController.getAllBook);
router.post("/books", books_controller_1.BooksController.createBook);
router.get("/books/:bookId", books_controller_1.BooksController.getSingleBook);
router.put("/books/:bookId", books_controller_1.BooksController.updateBook);
router.delete("/books/:bookId", books_controller_1.BooksController.deleteBook);
exports.BookRoutes = router;
