const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:test@cluster0.rr7hw.mongodb.net/firsttest?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    console.log(collection);
    // perform actions on the collection object

    // var cursor = collection.find();

    // cursor.each(function (err, doc) {

    //     console.log(doc);

    // });
    var collections = db.getCollectionNames();
    for (var i = 0; i < collections.length; i++) {
        print('Collection: ' + collections[i]); // print the name of each collection
        db.getCollection(collections[i]).find().forEach(printjson); //and then print the json of each of its elements
    }
    client.close();
});
