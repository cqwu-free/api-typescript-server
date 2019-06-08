"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postFilter_1 = require("../../model/shared/postFilter");
const message_1 = require("../../model/shared/message");
exports.apiCheckPostFilter = (req, res, next) => {
    // console.log('apiCheckPostFilter',req.query);
    const filters = new postFilter_1.PostFilter(req.query);
    // console.log(filter);
    for (const filter of Object.getOwnPropertyNames(req.query)) {
        // console.log(filter);
        if (!filters.hasOwnProperty(filter)) {
            next(new message_1.APIError('query string error', 'no such filter', 400));
        }
    }
    next();
};
