import { Schema } from 'mongoose'

const booking_schema = new Schema({
    room_id: { type: Number, required: true },
    booked_for: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true }
})

export default booking_schema