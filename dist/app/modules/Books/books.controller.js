"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResoponse_1 = __importDefault(require("../../../utils/sendResoponse"));
const books_services_1 = require("./books.services");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BookServices.createBook(req.body);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book created successfull",
        statusCode: 201,
        data: result,
    });
}));
const getAllBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BookServices.getAllBook();
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book Retrived successfull",
        statusCode: 200,
        data: result,
    });
}));
const getSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BookServices.getSingleBook(req.params.bookId);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book  is retrived successfull",
        statusCode: 200,
        data: result,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BookServices.updateBook(req.params.bookId, req.body);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book  is updated successfull",
        statusCode: 200,
        data: result,
    });
}));
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BookServices.deleteBook(req.params.bookId);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book  is deleted successfull",
        statusCode: 200,
        data: result,
    });
}));
exports.BooksController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook
};
