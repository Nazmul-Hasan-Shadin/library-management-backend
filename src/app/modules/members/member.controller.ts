import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResoponse";
import { MemberServices } from "./member.services";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMember(req.body);

  sendResponse(res, {
    success: true,
    message: "Member created successfull",
    statusCode: 201,
    data: result,
  });
});

const getAllMember = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMember();

  sendResponse(res, {
    success: true,
    message: "Member are Retrived successfull",
    statusCode: 200,
    data: result,
  });
});

const getSingleMember = catchAsync(async (req, res) => {
  const result = await MemberServices.getSIngleMember(req.params.memberId);

  sendResponse(res, {
    success: true,
    message: "Member  is retrived successfull",
    statusCode: 200,
    data: result,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const result = await MemberServices.updateMember(
    req.params.memberId,
    req.body
  );

  sendResponse(res, {
    success: true,
    message: "Member  is updated successfull",
    statusCode: 200,
    data: result,
  });
});

const deleteMemebr = catchAsync(async (req, res) => {
  const result = await MemberServices.deleteMember(req.params.memberId);

  sendResponse(res, {
    success: true,
    message: "Book  is deleted successfull",
    statusCode: 200,
    data: result,
  });
});

export const MemberController = {
  createMember,
  getAllMember,
  getSingleMember,
  updateMember,
  deleteMemebr,
};
