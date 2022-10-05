const path = require('path')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 3000

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/dev'
async function initMongo() {
  console.log('Initialising MongoDB...')
  let success = false
  while (!success) {
    try {
      client = await MongoClient.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      success = true
    } catch {
      console.log('Error connecting to MongoDB, retrying in 1 second')
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
  console.log('MongoDB init successfully')
  return client.db(client.s.options.dbName).collection('Tasks')
}

async function start() {
  const db = await initMongo()  
  app.get('/', async (req, res) => {    
    const hostname = require('os').hostname()
    res.send(`Response from server: ${hostname}, data: ${JSON.stringify({Tasks: await retrieveTasks(db)})}`)
  })  
  app.post('/insertTask', async (req, res) => {        
    await db.insertOne({task: req.body.task})
    res.send('Insert completed, please check')
  })  
  async function retrieveTasks(db) {
    const Tasks = (await db.find().toArray()).reverse()
    return Tasks.map(it => {
      return { ...it, description: marked(it.description) }
    })
  }
  app.listen(PORT, () => {
    console.log(`App listening on http://${HOST}:${PORT}`)
  })
}
start()