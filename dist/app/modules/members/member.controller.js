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
exports.MemberController = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResoponse_1 = __importDefault(require("../../../utils/sendResoponse"));
const member_services_1 = require("./member.services");
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.MemberServices.createMember(req.body);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Member created successfull",
        statusCode: 201,
        data: result,
    });
}));
const getAllMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.MemberServices.getAllMember();
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Member are Retrived successfull",
        statusCode: 200,
        data: result,
    });
}));
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.MemberServices.getSIngleMember(req.params.memberId);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Member  is retrived successfull",
        statusCode: 200,
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.MemberServices.updateMember(req.params.memberId, req.body);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Member  is updated successfull",
        statusCode: 200,
        data: result,
    });
}));
const deleteMemebr = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.MemberServices.deleteMember(req.params.memberId);
    (0, sendResoponse_1.default)(res, {
        success: true,
        message: "Book  is deleted successfull",
        statusCode: 200,
        data: result,
    });
}));
exports.MemberController = {
    createMember,
    getAllMember,
    getSingleMember,
    updateMember,
    deleteMemebr,
};
