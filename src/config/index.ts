
import dotenv from 'dotenv';

const envFound = dotenv.config();
const port = parseInt(process.env.PORT || "80")

if (envFound.error) {
// This error should crash whole process
throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {

    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },

    port: port,

    api: {
        prefix: '/api',
    },
}

export default config