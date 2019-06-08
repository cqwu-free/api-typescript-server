"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const errorHandling_1 = require("./api/general/errorHandling");
const dateParam_1 = require("./api/general/regParams/dateParam");
const apiDownloadImage_1 = require("./api/posts/apiDownloadImage");
const apiPosts_1 = require("./api/posts/apiPosts");
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// 中间件
const logger = (req, res, next) => {
    console.log('user:' + req.user + ' ' + new Date() + "-" + req.method + "-" + "Request to" + req.path);
    next();
};
const authenticator = (req, res, next) => {
    const username = "mister";
    req.user = username;
    next();
};
app.use(authenticator);
app.use(logger);
// 配置static指向的路径
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
//设置允许跨域
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE"
    });
    next();
});
//routes
app.get("/", (req, res, next) => {
    res.send('node tyepscript api is working...!!!"');
});
//配置post路径
app.use("/posts", apiPosts_1.postsRouter);
//处理错误信息
app.use(errorHandling_1.apiErrorHandler);
//GET http://localhost:8091/posts/2/todos?star=5
/**
 *GET: req.method
 *http:req.protocol
 *localhost:req.hostname
 *port:envirment
 *posts/2/todos:req.originalURL
 *2:req.params={postID:2}
 *?star=5:req.query={star:5}
 *req.app
 *req.bodyreq
 *req.headers
 *res.secure,req.cookies,req.fresh...
 */
// app.get('/headers', (req, res, next) => res.json(req.header));error
// app.use((req, res, next) => {
//     if (req.accepts("application/json")) {
//         next()
//     } else {
//         next(new APIError("Content Type Not Supported", "this api only supports application/json", 400))
//     }
// })
// app.post('/headers', (req, res, next) => res.json(req.headers));
// app.get('/booking/:id(\\d{4})', (req, res, next) => {
//     res.json(req.params);
// })
// const dataFormat='(\\d{4}-\\d{1,2}-\\d{1,2})';
// app.get(`/booking/:fromDate${dataFormat}/:toDate${dataFormat}`, (req, res, next) => {
//     res.json(req.params);
// })
app.get(`/booking/:fromDate/:toDate`, (req, res, next) => {
    res.json(req.params);
});
app.param("fromDate", dateParam_1.dateParam);
app.param("toDate", dateParam_1.dateParam);
/**
 * Response Object
 * res.send
 * res.json
 * res.format
 * res.sendFile
 * res.download
 * res.headers res.get res.set
 * res.status
 */
app.get("/static/download/:id", apiDownloadImage_1.apiDownloadImage);
app.disable("x-powered-by");
app.listen(process.env.PORT || 8091, () => {
    console.log('Server Started at 8091');
});
