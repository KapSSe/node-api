// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
    },

    (err, client) => {
        const db = client.db('TodoApp');

        if (err) throw err;
        console.log('Connected to MongoDB server');

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectId('5bb358308f295a08b515a84e')
        // },{
        //     $set: {
        //         completed: true
        //     }
        // },{
        //     returnOriginal: false
        // }).then((res) => {
        //     console.log(res);
        // }).catch((err) => {
        //     throw err
        // })

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectId('5bb362af8f295a08b515a887')
        },{
            $set:{
                name: 'Smith'
            },
            $inc: {
                age: 1
            }
        },{
            returnOriginal: false
        }).then((res) => {
            console.log('updated field' + res);
        }).catch((err) => {
            console.log(err)
        })
        
        // client.close();
    })