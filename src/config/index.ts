
import dotenv from 'dotenv';

const envFound = dotenv.config();
const port = parseInt(process.env.PORT || "80")

if (envFound.error) {
// This error should crash whole process
throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config: any = {

    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },

    port: port,

    api: {
        prefix: '/api',
    },

    db: {
        "development": { 
            postgres: {
                username : process.env.DB_CONNECTION_PG_USER,
                password: process.env.DB_CONNECTION_PG_PASSWORD,
                database: process.env.DB_CONNECTION_PG_DATABASE,
                host: process.env.DB_CONNECTION_PG_HOST,
                schema: process.env.DB_CONNECTION_PG_SCHEMA
            }
        },
        "production": {},
        "test": {}
    }
        
        
}

export default config