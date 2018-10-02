// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
    },

    (err, client) => {
        const db = client.db('TodoApp');

        if (err) throw err;
        console.log('Connected to MongoDB server');

        // db.collection('Todos').insertOne({
        //     text: "To do something",
        //     done: false
        // }, (err, result) => {
        //     if (err) throw err;
        //     console.log("added new recording:" + JSON.stringify(result.ops, undefined, 3));
        // });

        // db.collection('Users').insertOne({
        //     name: "James",
        //     age: 32,
        //     location: 'Philadelphia'
        // }, (err, res) => {
        //     if (err) throw err;
        //     console.log("added new recording: " + res.ops[0]._id.getTimestamp());
        // });

        client.close();
    })