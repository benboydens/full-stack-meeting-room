import { MongoClient } from "mongodb"
import fs from "fs"
import config from "../config/config.js"


const client = new MongoClient(config.database.url);

try {
    // initialize dataset of bookings
    const data = fs.readFileSync('../data/bookings.json', 'utf-8');

    // parsing to JSON object
    const all_bookings = JSON.parse(data);

    // getting collection bookings
    const database = client.db("meeting-room");
    const bookings = database.collection("bookings");

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await bookings.insertMany(all_bookings, options);
    console.log(`${result.insertedCount} bookings were inserted`);


    // initialize dataset of bookings
    const data2 = fs.readFileSync('../data/rooms.json', 'utf-8');

    // parsing to JSON object
    const all_rooms = JSON.parse(data2);

    // getting collection bookings
    const rooms = database.collection("rooms");

    // this option prevents additional documents from being inserted if one fails
    const result2 = await rooms.insertMany(all_rooms, options);
    console.log(`${result2.insertedCount} rooms were inserted`);

} catch (exception) {
    throw exception;
} finally {
    await client.close();
}

