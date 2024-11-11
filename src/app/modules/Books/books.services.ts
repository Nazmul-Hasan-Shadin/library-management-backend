import { Book } from "@prisma/client";
import catchAsync from "../../../utils/catchAsync";
import prisma from "../../../utils/prisma";

const createBook = async (data: Book) => {
  const result = await prisma.book.create({
    data: data,
  });

  return result;
};

const getAllBook = async () => {
  const result = await prisma.book.findMany({});

  return result;
};

const getSingleBook = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: bookId,
    },
  });

  return result;
};

const updateBook = async (bookId: string, data: any) => {
  const result = await prisma.book.update({
    where: {
      bookId: bookId,
    },
    data,
  });

  return result;
};

const deleteBook = async (bookId: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

export const BookServices = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
