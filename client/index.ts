import {User, UserStatus} from "../proto/users_pb";
import getUser from "./get-user";
import createUsers from "./create-users";
import allUsers from "./all-users";

const new_user = {
    name: 'Jim',
    age: 10,
    id: 20,
    status: UserStatus.OFFLINE
}

async function run() {
    const user = await getUser(1);
    console.log(user.toString());

    const jim = new User();
    jim.setName(new_user.name);
    jim.setAge(new_user.age);
    jim.setId(new_user.id);
    jim.setStatus(new_user.status);
    createUsers([jim]);
    console.log(`\nCreated user ${jim.toString()}`);

    const users = await allUsers();
    console.log(`\nListing all ${users.length} users`);
    for (const user of users) {
        console.log(user.toString());
    }
}

run();