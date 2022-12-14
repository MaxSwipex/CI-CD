
const express = require("express");
const createConnection = require('typeorm').createConnection

let test = 'Minus'

const main = async () => {
    try {
        await createConnection({
                type: "postgres",
                host: "database",
                port: process.env.POSTGRES_PORT || 5432,
                username: process.env.POSTGRES_USER || 'user',
                password: process.env.POSTGRES_PASSWORD || 'password',
                database: process.env.POSTGRES_DB || 'cicd',
            }
        )
        test = 'Plus'

        console.log('Connected to DB')
    } catch
        (err) {
        console.log('Cant connect to DB')
        throw err
    }
}

main()

export const app = express();
app.get("/", function (req, res) {
    return res.send(`Hello World`);
})

app.get("/testDB", function (req, res) {
    return res.send(`Hello World, ${test}`);
});

const port= process.env.PORT || 7000
app.listen(port, () => {
    console.log(`Server is running ${port}`);
});

