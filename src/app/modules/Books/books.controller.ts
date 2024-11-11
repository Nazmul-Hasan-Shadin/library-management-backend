import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResoponse";
import { BookServices } from "./books.services";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBook(req.body);

  sendResponse(res, {
    success: true,
    message: "Book created successfull",
    statusCode: 201,
    data: result,
  });
});

const getAllBook = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBook();

  sendResponse(res, {
    success: true,
    message: "Book Retrived successfull",
    statusCode: 200,
    data: result,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const result = await BookServices.getSingleBook(req.params.bookId);

  sendResponse(res, {
    success: true,
    message: "Book  is retrived successfull",
    statusCode: 200,
    data: result,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const result = await BookServices.updateBook(req.params.bookId, req.body);

  sendResponse(res, {
    success: true,
    message: "Book  is updated successfull",
    statusCode: 200,
    data: result,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const result = await BookServices.deleteBook(req.params.bookId);

  sendResponse(res, {
    success: true,
    message: "Book  is deleted successfull",
    statusCode: 200,
    data: result,
  });
});

export const BooksController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook
};
