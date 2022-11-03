import {Server, ServerCredentials} from "grpc";
import {UsersService} from "../proto/users_grpc_pb";
import {UsersServer} from "./services";
import {UserRepository} from "./repository";

const repo = new UserRepository()
const PORT = 8001;
const HOST = `localhost:${PORT}`;
console.log(`Listening on ${HOST}`);

const server = new Server();

server.addService(UsersService, new UsersServer(repo));

server.bind(HOST, ServerCredentials.createInsecure());

server.start();