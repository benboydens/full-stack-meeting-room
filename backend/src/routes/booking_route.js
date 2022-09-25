import { Bookings } from "../database/database.js"
import { validationResult } from "express-validator"

const BookingRoute = {
    all: (req, res) => {
        Bookings.all().then(
            (result) => {
                res.json(result)
            }
        )
    },
    post: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // TODO sanitize result
        const result = Bookings.create(req.body.room_id, req.body.booked_for, req.body.start_date, req.body.end_date)
        res.json(result)
    }
}

export default BookingRoute