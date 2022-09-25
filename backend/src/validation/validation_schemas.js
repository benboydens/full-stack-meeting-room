const booking_validation = {
    "id": "/Booking",
    "type": "object",
    "properties": {
        "room_id": { "type": "string" },
        "booked_for": { "type": "string", "format": "email" },
        "start_date": { "type": "string", "format": "date-time" },
        "end_date": { "type": "string", "format": "date-time" } 
    }
}

const room_validation = {
    "id": "/Room",
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "capacity": { "type": "number" }
    }
}

export { booking_validation, room_validation }