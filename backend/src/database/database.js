import mongoose from "mongoose"
import config from "../config/config.js"
import booking_schema from "../schemas/booking.js";
import room_schema from "../schemas/room.js";

mongoose.connect(config.database.url, { dbName: "meeting-room" });
const Booking = mongoose.model('Booking', booking_schema);
const Room = mongoose.model('Room', room_schema);

const Bookings = {
    all: () => {
        return Booking.find({})
    },
    find: (options) => {
        return Booking.find(options)
    },
    create: (room, booked_for, start_date, end_date) => {
        const booking = new Booking({
            room_id: room,
            booked_for: booked_for,
            start_date: start_date,
            end_date: end_date,
        })
        // TODO lower capacity when creating bookings
        return booking.save()
    }
}

const Rooms = {
    all: () => {
        return Room.find({})
    },
    create: (name, capacity) => {
        const room = new Room({
            name: name,
            capacity: capacity
        })
        return room.save()
    }
}

const close_connection = async () => {
    mongoose.disconnect()
}

export { Bookings, Rooms, close_connection }