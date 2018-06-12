const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users');

const User = require('./models/user');

app.use(cors());

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.json(users)
    });

});

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    });
});

app.listen(8888);