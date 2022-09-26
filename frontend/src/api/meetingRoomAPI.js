import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:3000`
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
    }
}

export { RoomsAPI, BookingsAPI }