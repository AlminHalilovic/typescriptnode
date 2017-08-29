import { Transaction } from "sequelize";
import { models, sequelize } from "./models/index";
import { IUserAttributes, IUserInstance }
    from "./models/interfaces/user_interfaces";

export class UserDAO {

    public findAll(): Promise<IUserInstance[]> {
        let promise = new Promise<IUserInstance[]>((resolve: Function, reject: Function) => {
            sequelize.transaction((t: Transaction) => {
                return models.User.findAll({})
                    .then((users: IUserInstance[]) => {
                        resolve(users);
                    }).catch((error: Error) => {
                        reject(error);
                    });
            });
        });

        return promise;
    }

}

export const userDAO = new UserDAO();
