import connectDB from '@/util/database';
import { MongoClient } from 'mongodb';


export default async function Home() {

  // const url = 'mongodb+srv://sdd7878:!doubt1457@cluster0.0qcp42q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  // const options = { useNewUrlParser: true }
  // let connectDB = new MongoClient(url).connect();

  let client = await connectDB;
  const database = client.db('forum');
  let result = await database.collection('post').find().toArray();

  console.log(result);

  return (
    <div className="">
      {result[0].title}
    </div>
  );
}
