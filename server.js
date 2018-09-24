const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:055b98c9-7fd3-436a-9075-4fd295c1a495',
    key: '003e3d9e-c07b-4d59-9123-d221f51d5459:OcuKhAoVNUp/sYm2NV5kmfZidojTLEpZLkmnLZI4UhU='
});
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/users', (req, res) => {
    const {username} = req.body;
    const user = {name: username, id: username};
    chatkit
        .createUser(user)
        .then(() => {
            console.log('Created user', user.name);
            res.status(201).json(user)
        })
        .catch(error => {
            if (error.error === 'services/chatkit/user_already_exists') {
                console.log('user already exists', user.name);
                res.status(201).json(user)
            } else {
                console.log(error);
                res.status(error.status).json(error)
            }
        })
});
app.listen(3001, () => {
    console.log('Running on port 3001');
});
