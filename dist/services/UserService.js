"use strict";
const user_dao_1 = require("./../dao/user_dao");
class UserService {
    findAll() {
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line:only-arrow-functions
            user_dao_1.userDAO.findAll().then((users) => {
                return resolve(users);
            }).catch((err) => {
                return reject(err);
            });
        });
    }
}
exports.UserService = UserService;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserService;
