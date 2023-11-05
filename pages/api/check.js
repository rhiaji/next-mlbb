import { connectToDb } from './db'

export default async (req, res) => {
    try {
        const db = await connectToDb()

        // Handle your database operations here

        // Return a success response
        res.status(200).json({ message: 'Success' })
    } catch (error) {
        console.error(error)

        // Return an error response
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
