import {User} from "../proto/users_pb";
import {users} from "./db"

type UserModel = Promise<User | null>
type UserModels = Promise<User[] | []>

export interface IRepository {

    findUser(userId: number): UserModel

    getUsers(): UserModels

    createUser(user: User): void
}

export class UserRepository implements IRepository {

    findUser(userId: number): UserModel {
        return Promise.resolve(users.find(user => user.getId() === userId) || null)
    }

    getUsers(): UserModels {
        return Promise.resolve(users)
    }

    createUser(user: User): void {
        users.push(user);
    }

}