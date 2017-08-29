import { userDAO } from "./../dao/user_dao";

export class UserService {

    public findAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line:only-arrow-functions
            userDAO.findAll().then((users) => {
                return resolve(users);
            }).catch((err) => {
                return reject(err);
            });

        });
    }

}

export default UserService;
