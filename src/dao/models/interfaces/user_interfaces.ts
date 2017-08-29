import { Instance } from "sequelize";
export interface IUserAttributes {
    id: number;
    firstName: number;
    lastName: string;
    city: string;
    country: string;
    createdAt: string;
    updatedAt: string;
}
export interface IUserInstance extends Instance<IUserAttributes> {
    dataValues: IUserAttributes;
}
