import dotenv from "dotenv"


dotenv.config();


const config = {

    port: process.env.PORT || 5000,

    api: {
        prefix: "/api"
    },

    cors: {
        origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
        credentials: true,
        methods: ["get"]
    }
}

export default config