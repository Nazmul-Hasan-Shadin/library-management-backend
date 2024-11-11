"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globlaErrorHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        status: 404,
        message: err.message || "something went wrong",
    });
};
exports.default = globlaErrorHandler;
