import express from 'express'
import os from 'os'
const app = express()

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 3000
app.get('/', (req, res) =>{
    res.send(`Message send from ${os.hostname()}`)
})
app.listen(PORT, () => {
    console.log(`App listening on http://${HOST}:${PORT}`)
})