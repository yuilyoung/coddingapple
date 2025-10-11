

'use client'

import { useSession } from 'next-auth/react';


export default function Home() {

  // const url = 'mongodb+srv://sdd7878:!doubt1457@cluster0.0qcp42q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  // const options = { useNewUrlParser: true }
  // let connectDB = new MongoClient(url).connect();

  let session  = useSession();
  console.log("Session user");

  if (session) {
    console.log(session)
  }

  return (
    <div className="">
      
    </div>
  );
}
