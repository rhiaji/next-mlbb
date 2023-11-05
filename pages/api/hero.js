import { ObjectId } from 'mongodb'
import { connectToDb, getDb } from './db'

export default async (req, res) => {
    try {
        connectToDb() // No need to await here

        const db = getDb()

        // Handle GET request
        const heroName = req.query.name // Access the ID from query parameters

        if (heroName) {
            const data = await db.collection('heroes').findOne({ heroName: heroName })

            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ error: 'Hero not found' })
            }
        } else if (req.method === 'DELETE') {
            // Handle DELETE request
            const heroId = req.query.id // Access the ID from query parameters

            if (ObjectId.isValid(heroId)) {
                db.collection('heroes')
                    .deleteOne({ _id: new ObjectId(heroId) })
                    .then((result) => {
                        if (result) {
                            res.status(200).json(result)
                        } else {
                            res.status(404).json({ error: 'Hero not found' })
                        }
                    })
                    .catch(() => {
                        res.status(500).json({ error: 'Could not Hero' })
                    })
            } else {
                res.status(500).json({ error: 'Not a valid Hero id' })
            }
        } else if (req.method === 'PATCH') {
            // Handle PATCH request
            const heroId = req.query.id // Access the ID from query parameters
            const updates = req.body

            if (ObjectId.isValid(heroId)) {
                db.collection('heroes')
                    .updateOne({ _id: new ObjectId(heroId) }, { $set: updates })
                    .then((result) => {
                        if (result) {
                            res.status(200).json(result)
                        } else {
                            res.status(404).json({ error: 'Hero not found' })
                        }
                    })
                    .catch(() => {
                        res.status(500).json({ error: 'Could not update Hero' })
                    })
            } else {
                res.status(500).json({ error: 'Not a valid Hero id' })
            }
        } else {
            res.status(405).end() // Method Not Allowed for other HTTP methods
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
