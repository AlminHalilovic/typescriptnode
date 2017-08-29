import * as fs from "fs";
import * as path from "path";
import * as SequelizeStatic from "sequelize";
import { Sequelize } from "sequelize";
import { IUserAttributes, IUserInstance }
    from "./interfaces/user_interfaces";

export interface ISequelizeModels {
    User: SequelizeStatic.Model<IUserInstance, IUserAttributes>;

}

class Database {

    private basename: string;

    private models: ISequelizeModels;

    private sequelize: Sequelize;

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
            this.sequelize = new SequelizeStatic(database, username,
                password, options);
            this.models = ({} as any);

            fs.readdirSync(__dirname).filter((file: string) => {
                return (file !== this.basename) && (file !== "interfaces");
            }).forEach((file: string) => {
                let model = this.sequelize.import(path.join(__dirname, file));
                this.models[(model as any).name] = model;
            });

            Object.keys(this.models).forEach((modelName: string) => {
                if (typeof this.models[modelName].associate === "function") {
                    this.models[modelName].associate(this.models);
                }
            });
        } catch (ex) {
            console.log("exception caught: " + ex);
        }
    }

    public getModels() {
        return this.models;
    }

    public getSequelize() {
        return this.sequelize;
    }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();
