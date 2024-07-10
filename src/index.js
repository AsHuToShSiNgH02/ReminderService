const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);

        sendBasicEmail(
            'dummy.232002@gmail.com',
            'ashutoshin7499@gmail.com',
            'demo subject',
            'demo content'
        );
    });

}

setupAndStartServer();