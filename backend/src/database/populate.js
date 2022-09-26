import fs from "fs"
import { Bookings, Rooms, close_connection } from "./database.js"

try {

    // initialize dataset of bookings
    const room_data = fs.readFileSync('../data/rooms.json', 'utf-8');

    // parsing to JSON object
    const all_rooms = JSON.parse(room_data);
    let rooms = {}
    for (const room of all_rooms) {
        const result = await Rooms.create(room.name, room.capacity)
        rooms[room.id] = result._id
    }
    

    // initialize dataset of bookings
    const booking_data = fs.readFileSync('../data/bookings.json', 'utf-8');

    // parsing to JSON object
    const bookings_json = JSON.parse(booking_data);    

    for (const booking of bookings_json) {
        await Bookings.create(rooms[booking.room_id], booking.booked_for, booking.start_date, booking.end_date)
    }

    console.log("Successfully populated database.")

} catch (exception) {
    throw exception;
} finally {
    await close_connection();
}

