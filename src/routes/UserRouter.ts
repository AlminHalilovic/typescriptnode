import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from "./../services/UserService";
import { IUserInstance }
  from "./../dao/models/interfaces/user_interfaces";

export class UserRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }


  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("In user router, getting data");
      let users: IUserInstance[] =
        await new UserService().findAll();
      let mappedUsers = users.map(function (x) {
        return {
          firstName: x.dataValues.firstName,
          lastName: x.dataValues.lastName,
          city: x.dataValues.city

        }
      })
      res.send(JSON.stringify("nothing"));
    } catch (ex) {
      res.send({ status: 500, response: ex });
    }
  }

  init() {
    this.router.get('/', this.getAll);
  }

}
const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;