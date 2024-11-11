"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_route_1 = require("./app/modules/Books/books.route");
const member_route_1 = require("./app/modules/members/member.route");
const borrow_route_1 = require("./app/modules/BorrowBook/borrow.route");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("server is running");
});
app.use("/api", books_route_1.BookRoutes);
app.use("/api", member_route_1.MemberRoutes);
app.use("/api", borrow_route_1.BorrowRoutes);
app.use(errorMiddleware_1.default);
exports.default = app;
