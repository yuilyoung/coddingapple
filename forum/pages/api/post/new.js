import connectDB from "@/util/database";

export default async function handler(요청, 응답) {
    console.log(요청.body);
    
  if (요청.method == 'GET'){
    응답.status(200).json({ name: '안녕' })
  }
  if (요청.method == 'POST'){
    const database = (await connectDB).db('forum');
    let result = await database.collection('post').insertOne(요청.body)
    응답.status(200).redirect(302, '/list');
  }
}