import mysql, { PoolOptions } from "mysql2/promise"

const config: PoolOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10,
    waitForConnections: true,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    database: process.env.DB_DATABASE,
}

export const database = mysql.createPool(config)