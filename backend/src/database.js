import * as dotenv from 'dotenv'
dotenv.config()
import { MongoClient } from "mongodb";


const url = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.ycyuerf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const Bookings = {
    all: () => {
        // return all bookings
        return;
    },
    create: async () => {
        // create new booking and return result
        const database = client.db("meeting-room");
        const collection = database.collection("bookings");

        // example document
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await collection.insertOne(doc);
        return result;
    }
}

const Rooms = {
    all: () => {
        // return all meeting rooms
        return;
    }
}

export { connect, Bookings, Rooms }