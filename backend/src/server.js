import express from 'express'
import { Bookings, Rooms } from './database/database.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

Bookings.all()
Rooms.all()