import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    database: {
        url: `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.ycyuerf.mongodb.net/?retryWrites=true&w=majority`
    }
}

export default config;