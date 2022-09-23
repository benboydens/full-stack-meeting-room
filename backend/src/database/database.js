import { MongoClient } from "mongodb"
import config from "../config/config"


const client = new MongoClient(config.database.url);

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

export { Bookings, Rooms }