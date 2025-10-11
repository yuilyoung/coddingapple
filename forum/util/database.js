import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://sdd7878:!doubt1457@cluster0.0qcp42q.mongodb.net/forum?retryWrites=true&w=majority&appName=Cluster0'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}

export default connectDB;