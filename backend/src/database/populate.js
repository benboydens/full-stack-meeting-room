import { MongoClient } from "mongodb"
import fs from "fs"
import config from "../config/config.js"

const client = new MongoClient(config.database.url);

try {
    // initialize dataset of bookings
    const booking_data = fs.readFileSync('../data/bookings.json', 'utf-8');

    // parsing to JSON object
    const all_bookings = JSON.parse(booking_data);    

    // getting collection bookings
    const bookings = client.db("meeting-room").collection("bookings");

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await bookings.insertMany(all_bookings, options);
    console.log(`${result.insertedCount} bookings were inserted`);


    // initialize dataset of bookings
    const room_data = fs.readFileSync('../data/rooms.json', 'utf-8');

    // parsing to JSON object
    const all_rooms = JSON.parse(room_data);

    // getting collection bookings
    const rooms = client.db("meeting-room").collection("rooms");

    // this option prevents additional documents from being inserted if one fails
    const result2 = await rooms.insertMany(all_rooms, options);
    console.log(`${result2.insertedCount} rooms were inserted`);

} catch (exception) {
    throw exception;
} finally {
    await client.close();
}

