"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postSummary_1 = require("../../model/shared/postSummary");
const postFilter_1 = require("../../model/shared/postFilter");
exports.apiGetPosts = (req, res) => {
    const filters = new postFilter_1.PostFilter(req.query);
    console.log('apiGet', filters);
    const filteredData = data_1.DataStore.posts.filter((item) => {
        let condations = [
            filters.currency ? item.currency == filters.currency : true
        ];
        return condations.every(value => value == true);
    });
    res.json(filteredData.map((item) => new postSummary_1.PostSummary(item)));
};
