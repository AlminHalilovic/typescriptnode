"use strict";
const express_1 = require('express');
class SampleRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.send("OK");
    }
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.SampleRouter = SampleRouter;
const sampleRoutes = new SampleRouter();
sampleRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sampleRoutes.router;
