const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const groupRoutes = express.Router();
const PORT = 4000;

let Group = require('./group.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/groups', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

groupRoutes.route('/').get(function(req, res) {
    Group.find(function(err, groups) {
        if (err) {
            console.log(err);
        } else {
            res.json(groups);
        }
    });
});

groupRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, group) {
        res.json(group);
    });
});


groupRoutes.route('/update/:id').post(function(req, res) {
    Group.findById(req.params.id, function(err, group) {
        if (!group)
            res.status(404).send("data is not found");
        else
            group.group_name = req.body.group_name;
            group.contact_name = req.body.contact_name;
            group.email = req.body.email;
            group.phone_number = req.body.phone_number;
            // group.group_completed = req.body.group_completed;
            group.save().then(group => {
                res.json('Group updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

groupRoutes.route('/add').post(function(req, res) {
    let group = new Group(req.body);
    group.save()
        .then(group => {
            res.status(200).json({'group': 'group added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new group failed');
        });
});


app.use('/groups', groupRoutes)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});