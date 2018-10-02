// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
    },
    (err, client) => {
        const db = client.db('TodoApp');
        if (err) throw err;
        console.log('Connected to MongoDB server');
        
        //deleteMany
        // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
        //         console.log('Deleted items: '+ result);
        // }).catch((err) => {
        //     throw err;
        // })

        //deleteOne
        // db.collection('Todos').deleteOne({text: "To eat lunch"}).then((result) => {
        //     console.log('Deleted items: '+ result);
        // }).catch((err) => {
        //     throw err;
        // })

        //findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed:false}).then((res) => {
        //     console.log(res);
        // }).catch((err) => {
        //     throw err;
        // })

        // db.collection('Users').deleteMany({name: 'John'}).then(() => {
        //     console.log('Users has been deleted!');
        // }).catch((err) => {
        //     throw err;
        // })

        db.collection('Users').findOneAndDelete({_id: new ObjectID('5bb3629d8f295a08b515a886')}).then((res) => {
            console.log('deleted user: ' +  res);
        }).catch((err) => {
            throw err;
        })

        // client.close();
    })