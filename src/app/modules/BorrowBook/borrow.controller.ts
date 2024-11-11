import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResoponse";
import { BorrowServices } from "./borrow.services";

const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowServices.borrowBook(req.body);

  sendResponse(res, {
    success: true,
    message: "Book Borrowed successfull",
    statusCode: 201,
    data: result,
  });
});

const returnBook = catchAsync(async (req, res) => {
  // const { borrowId } = req.params;
  const { borrowId } = req.body;

  const result = await BorrowServices.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    message: "Book returned successfull",
    statusCode: 201,
    data: null,
  });
});

const getOverdueBooks = catchAsync(async (req, res) => {
  const overdueBooks = await BorrowServices.getOverdueBooks();

  if (overdueBooks.length === 0) {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "No overdue books",
      data: [],
    });
  } else {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Overdue borrow list fetched",
      data: overdueBooks,
    });
  }
});

export const BorrowController = {
  borrowBook,
  returnBook,
  getOverdueBooks,
};
