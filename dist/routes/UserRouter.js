"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express_1 = require('express');
const UserService_1 = require("./../services/UserService");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("In user router, getting data");
                let users = yield new UserService_1.UserService().findAll();
                let mappedUsers = users.map(function (x) {
                    return {
                        firstName: x.dataValues.firstName,
                        lastName: x.dataValues.lastName,
                        city: x.dataValues.city
                    };
                });
                res.send(JSON.stringify("nothing"));
            }
            catch (ex) {
                res.send({ status: 500, response: ex });
            }
        });
    }
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.UserRouter = UserRouter;
const userRoutes = new UserRouter();
userRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userRoutes.router;
