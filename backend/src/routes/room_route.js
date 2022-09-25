import { Rooms } from "../database/database.js"
import { validationResult } from "express-validator"


const RoomRoute = {
    all: (req, res) => {
        Rooms.all().then(
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
        const result = Rooms.create(req.body.name, req.body.capacity)
        res.json(result)
    }
}

export default RoomRoute