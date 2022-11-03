import * as http from "http"
import allUsers from "../client/all-users";

const hostname = '127.0.0.1';
const port = 3001;

const web_server = http.createServer(async (req, res) => {

    if (req.method === "GET") {

        const users = await allUsers();

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(users);
    }

    if (req.method === "POST") {

    }

});

web_server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});