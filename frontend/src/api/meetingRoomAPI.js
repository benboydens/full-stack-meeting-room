import axios from 'axios'

const api = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_API_PORT}`
})

const RoomsAPI = {
    resource: 'rooms',
    get_all() {
        return api.get(`/${this.resource}`)
    },
}

const BookingsAPI = {
    resource: 'bookings',
    get_all() {
        return api.get(`/${this.resource}`)
    },
    find_by_room(room_id) {
        return api.get(`/${this.resource}?room=${room_id}`)
    },
    create_booking(booking) {
        return api.post(`/${this.resource}`, booking)
    }
}

export { RoomsAPI, BookingsAPI }