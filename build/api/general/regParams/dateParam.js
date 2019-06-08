"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../../../model/shared/message");
const dateFormat = new RegExp("(\\d{4})-(\\d{1,2})-(\\d{1,2})");
exports.dateParam = (req, res, next, value, name) => {
    // console.log(name+":"+value)
    const parsedComponents = dateFormat.exec(value);
    if (parsedComponents) {
        console.log(parsedComponents);
        const [_, year, month, day] = parsedComponents.map((item) => parseInt(item));
        const date = new Date(year, month - 1, day);
        req.params[name] = date;
        next();
    }
    else {
        next(new message_1.APIError("parse ERROR", "Date could not be RangeParser,Date Format:YYYY-MM-DD", 400));
    }
};
