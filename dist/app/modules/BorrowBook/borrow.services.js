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
exports.BorrowServices = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const borrowBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: { bookId: data.bookId },
    });
    if (!book)
        throw new Error("Book not found");
    if (book.availableCopies < 1)
        throw new Error("No copies available for borrowing");
    const result = yield prisma_1.default.$transaction((borrowbooktrasaction) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowRecord = yield borrowbooktrasaction.borrowRecord.create({
            data: Object.assign(Object.assign({}, data), { borrowDate: new Date() }),
        });
        yield prisma_1.default.book.update({
            where: { bookId: data.bookId },
            data: { availableCopies: (book === null || book === void 0 ? void 0 : book.availableCopies) - 1 },
        });
        return borrowRecord;
    }));
    return result;
});
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowRecord = yield prisma_1.default.borrowRecord.findUnique({
        where: { borrowId },
        include: { book: true },
    });
    console.log(borrowBook, "iam boorowrecord wiht book", borrowRecord);
    if (!borrowRecord)
        throw new Error("Borrow record not found");
    const result = yield prisma_1.default.$transaction((prismaTransaction) => __awaiter(void 0, void 0, void 0, function* () {
        // Update the borrow record with the return date
        const updatedBorrowRecord = yield prismaTransaction.borrowRecord.update({
            where: { borrowId },
            data: {
                returnDate: new Date(),
            },
        });
        // Update the book's available copies
        yield prismaTransaction.book.update({
            where: { bookId: borrowRecord.bookId },
            data: { availableCopies: borrowRecord.book.availableCopies + 1 },
        });
        return updatedBorrowRecord;
    }));
    return result;
});
const getOverdueBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield prisma_1.default.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    const overdueDetails = overdueBooks.map((record) => {
        const overdueDays = Math.floor((new Date().getTime() - new Date(record.borrowDate).getTime()) /
            (1000 * 3600 * 24));
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
    return overdueDetails;
});
exports.BorrowServices = {
    borrowBook,
    returnBook,
    getOverdueBooks,
};
