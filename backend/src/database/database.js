import mongoose from "mongoose"
import config from "../config/config.js"
import booking_schema from "../schemas/booking.js";
import room_schema from "../schemas/room.js";

mongoose.connect(config.database.url, { dbName: "meeting-room" });
const Booking = mongoose.model('Booking', booking_schema);
const Room = mongoose.model('Room', room_schema);

const Bookings = {
    all: () => {
        // return all bookings
        // TODO remove console.log
        Booking.find({}).then((res) => {
            console.log(res);
            return res;
        });
    },
    create: (room, booked_for, start_date, end_date) => {
        // TODO Add validation for input
        // TODO replace test code here
        const booking = new Booking({
            room_id: 2,
            booked_for: "Ben",
            start_date: Date.now(),
            end_date: Date.now(),
        })
        booking.save().then(() => console.log('created booking'))
    }
}

const Rooms = {
    all: () => {
        // return all meeting rooms
        // TODO remove console.log
        Room.find({}).then((res) => {
            console.log(res)
            return res;
        })
    },
    create: (name, cap) => {
        // TODO Add validation for input
        // TODO replace test code here
        const room = new Room({
            name: "test",
            capacity: 5
        })
        room.save().then(() => console.log('created room'))
    }
}

export { Bookings, Rooms }