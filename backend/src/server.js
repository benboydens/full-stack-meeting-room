import express from 'express'
import cors from 'cors'
import BookingRoute from './routes/booking_route.js'
import RoomRoute from './routes/room_route.js'
import { body } from 'express-validator'

const app = express();
const port = 3000;

app.use(cors())

// configure app to use JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Room route
app.get('/rooms', RoomRoute.all)
app.post('/rooms',
    body('name').isLength({ min: 3, max: 90 }),
    body('capacity').isInt({ min: 1 }),
    RoomRoute.post)


// Booking route
app.get('/bookings', BookingRoute.all)
app.post('/bookings', 
    body('booked_for').isEmail(),
    body('start_date').isISO8601().toDate(),
    body('end_date').isISO8601().toDate(),
    BookingRoute.post)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})