import { Schema } from 'mongoose'

const room_schema = new Schema({
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
})

export default room_schema