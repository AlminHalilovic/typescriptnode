"use strict";
const fs = require("fs");
const path = require("path");
const SequelizeStatic = require("sequelize");
class Database {
    constructor() {
        this.basename = path.basename(module.filename);
        let dialect = process.env.dialect;
        let database = process.env.database;
        let host = process.env.host;
        let username = process.env.username;
        let password = process.env.password;
        let driver = process.env.driver;
        let port = process.env.mssqlport;
        let options = {
            dialect: dialect,
            database: database,
            host: host,
            username: username,
            password: password,
            driver: driver,
            port: port,
            dialectOptions: {
                encrypt: true
            }
        };
        try {
            this.sequelize = new SequelizeStatic(database, username, password, options);
            this.models = {};
            fs.readdirSync(__dirname).filter((file) => {
                return (file !== this.basename) && (file !== "interfaces");
            }).forEach((file) => {
                let model = this.sequelize.import(path.join(__dirname, file));
                this.models[model.name] = model;
            });
            Object.keys(this.models).forEach((modelName) => {
                if (typeof this.models[modelName].associate === "function") {
                    this.models[modelName].associate(this.models);
                }
            });
        }
        catch (ex) {
            console.log("exception caught: " + ex);
        }
    }
    getModels() {
        return this.models;
    }
    getSequelize() {
        return this.sequelize;
    }
}
const database = new Database();
exports.models = database.getModels();
exports.sequelize = database.getSequelize();
