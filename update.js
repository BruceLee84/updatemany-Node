const {MongoClient} = require('mongodb')

const databaseName = "test";
const url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log('error found')
    }

    console.log('connected')

    const db = client.db(databaseName)

    let query = {};

    let data = {$set:{phoneNumber:"9080706050"}}

    db.collection("userdetails").updateMany(query, data, (err, collection)=>{
        if(err){
            console.log(collection.modifiedCount + "updated successfully");
            console.log("collection", collection)
            client.close()
        }
    })
})