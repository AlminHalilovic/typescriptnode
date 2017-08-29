"use strict";
const index_1 = require("./models/index");
class UserDAO {
    findAll() {
        let promise = new Promise((resolve, reject) => {
            index_1.sequelize.transaction((t) => {
                return index_1.models.User.findAll({})
                    .then((users) => {
                    resolve(users);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
        return promise;
    }
}
exports.UserDAO = UserDAO;
exports.userDAO = new UserDAO();
