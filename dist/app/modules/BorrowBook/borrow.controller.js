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
exports.BorrowController = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResoponse_1 = __importDefault(require("../../../utils/sendResoponse"));
const borrow_services_1 = require("./borrow.services");
const borrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_services_1.BorrowServices.borrowBook(req.body);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book Borrowed successfull",
        statusCode: 201,
        data: result,
    });
}));
const returnBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { borrowId } = req.params;
    const { borrowId } = req.body;
    const result = yield borrow_services_1.BorrowServices.returnBook(borrowId);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book returned successfull",
        statusCode: 201,
        data: null,
    });
}));
const getOverdueBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield borrow_services_1.BorrowServices.getOverdueBooks();
    if (overdueBooks.length === 0) {
        (0, sendResoponse_1.default)(res, {
            success: true,
            statusCode: 200,
            message: "No overdue books",
            data: [],
        });
    }
    else {
        (0, sendResoponse_1.default)(res, {
            success: true,
            statusCode: 200,
            message: "Overdue borrow list fetched",
            data: overdueBooks,
        });
    }
}));
exports.BorrowController = {
    borrowBook,
    returnBook,
    getOverdueBooks,
};
