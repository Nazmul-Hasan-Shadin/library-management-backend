import { BorrowRecord } from "@prisma/client";
import catchAsync from "../../../utils/catchAsync";
import prisma from "../../../utils/prisma";

const borrowBook = async (data: BorrowRecord) => {
  const book = await prisma.book.findUnique({
    where: { bookId: data.bookId },
  });

  if (!book) throw new Error("Book not found");
  if (book.availableCopies < 1)
    throw new Error("No copies available for borrowing");

  const result = await prisma.$transaction(async (borrowbooktrasaction) => {
    const borrowRecord = await borrowbooktrasaction.borrowRecord.create({
      data: {
        ...data,
        borrowDate: new Date(),
      },
    });

    await prisma.book.update({
      where: { bookId: data.bookId },
      data: { availableCopies: book?.availableCopies! - 1 },
    });

    return borrowRecord;
  });

  return result;
};

const returnBook = async (borrowId: string) => {
  const borrowRecord = await prisma.borrowRecord.findUnique({
    where: { borrowId },
    include: { book: true },
  });

  console.log(borrowBook, "iam boorowrecord wiht book", borrowRecord);

  if (!borrowRecord) throw new Error("Borrow record not found");

  const result = await prisma.$transaction(async (prismaTransaction) => {
    // Update the borrow record with the return date
    const updatedBorrowRecord = await prismaTransaction.borrowRecord.update({
      where: { borrowId },
      data: {
        returnDate: new Date(),
      },
    });

    // Update the book's available copies
    await prismaTransaction.book.update({
      where: { bookId: borrowRecord.bookId },
      data: { availableCopies: borrowRecord.book.availableCopies + 1 },
    });

    return updatedBorrowRecord;
  });

  return result;
};

const getOverdueBooks = async () => {
  const overdueBooks = await prisma.borrowRecord.findMany({
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
    const overdueDays = Math.floor(
      (new Date().getTime() - new Date(record.borrowDate).getTime()) /
        (1000 * 3600 * 24)
    );

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });

  return overdueDetails;
};

export const BorrowServices = {
  borrowBook,
  returnBook,
  getOverdueBooks,
};
