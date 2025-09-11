import connectDB from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        console.log(req.body);

        let client = await connectDB;
        const database = client.db('forum');
        let result = await database.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)},
            //{$set : req.body}
            {$set : {title : req.body.title, content : req.body.content}}
        )
        res.redirect(302, '/list');
    }   
}