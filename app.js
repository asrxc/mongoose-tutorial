

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB',  { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check the data entered, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: String
});

const Fruit = mongoose.model('Fruit',fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 4.2,
    review: "Apples are tasty!"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: "Abhiraj",
    age: 21.1
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 3.8,
    review: "Average kiwis!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 5.0,
    review: "Average oranges!"
});

const banana = new Fruit({
    name: "Banana",
    rating: 4.1,
    review: "Nice bananas!"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved all the fruits to fruitsDB ");
//     }
// });

// Fruit.updateOne({name: "Orange"},{review: "Sweet oranges!"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully updated!")
//     }
// });

// Fruit.deleteOne({_id: "5f36e02f79f7a30c60344d37"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully updated!")
//     }
// });

// Fruit.deleteMany({name: "Apple"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully updated!")
//     }
// });

const cherry = new Fruit({
    name: "Cherry",
    rating: 4.8,
    review: "Sweet cherries!"
});

// cherry.save();

Person.updateOne({name: "Abhiraj"},{favouriteFruit: cherry},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated!")
    }
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 4.1,
    review: "Sour Pinapples"
});

// pineapple.save();

const child = new Person({
    name: "Golu",
    age: 5,
    favouriteFruit: pineapple
});

// child.save();


Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit);
        });
    }
});

