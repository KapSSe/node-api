// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
    },
    (err, client) => {
        const db = client.db('TodoApp');
        if (err) throw err;
        console.log('Connected to MongoDB server');

        db.collection('Users').find({name:"John"}).toArray().then((users) => {
            console.log(`Users: ${JSON.stringify(users, undefined, 2)}`);
        }).catch((err) => {
            throw err
        })

        // client.close();
    })