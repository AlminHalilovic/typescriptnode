"use strict";
function default_1(sequelize, dataTypes) {
    // tslint:disable-next-line:variable-name
    let User = sequelize.define("User", {
        id: { type: dataTypes.INTEGER, field: "id", primaryKey: true, autoIncrement: true },
        // tslint:disable-next-line:object-literal-sort-keys
        firstName: { type: dataTypes.STRING, field: "first_name" },
        lastName: { type: dataTypes.STRING, field: "last_name" },
        city: { type: dataTypes.STRING, field: "city" },
        country: { type: dataTypes.STRING, field: "country" },
        createdAt: { type: dataTypes.DATE, field: "created_date" },
        updatedAt: { type: dataTypes.DATE, field: "last_update_date" },
    }, {
        classMethods: {},
        indexes: [],
        tableName: "users",
        timestamps: false,
    });
    return User;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
