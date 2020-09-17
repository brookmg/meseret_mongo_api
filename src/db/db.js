import { connect, connection } from 'mongoose'
connection.on('error', console.error.bind(console, 'connection error:'));

export async function mongoConnection() {
    return await connect( process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
}