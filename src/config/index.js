
import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
// This error should crash whole process

throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {

    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },

    port: parseInt(process.env.PORT, 10),
    
    api: {
        prefix: '/api',
    },
}

export default config