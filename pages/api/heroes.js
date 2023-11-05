import { connectToDb, getDb } from './db'

export default async (req, res) => {
    try {
        await connectToDb()

        const db = getDb()

        if (req.method === 'GET') {
            let heroes = []

            db.collection('heroes')
                .find()
                .sort({ heroName: 1 })
                .forEach((hero) => heroes.push(hero))
                .then(() => {
                    res.status(200).json(heroes)
                })
                .catch(() => {
                    res.status(500).json({ error: 'Could not get any Data' })
                })
        } else if (req.method === 'POST') {
            // Handle POST request
            const heroData = req.body

            db.collection('heroes')
                .insertOne(heroData)
                .then((result) => {
                    res.status(201).json(result)
                })
                .catch(() => {
                    res.status(500).json({
                        error: 'Could not create a new employee Data',
                    })
                })
        } else {
            res.status(405).end() // Method Not Allowed for other HTTP methods
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
