import connectDB from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    console.log("delete session");
    console.log(session);
    console.log("request body");
    console.log(req.body);
    const { id, email } =  JSON.parse(req.body);
    console.log(req.body.id);
    console.log(id);
    console.log(email);

    if(session)
    {
        if(session.user.email != email)
        {
            console.log("acess deny.");
            res.status(111).json({ error: '501' });
        }
        else{
            console.log("delete success.");

                if (req.method == 'DELETE') {
                    const db = (await connectDB).db('forum');
                    let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body.id)});
                    res.status(200).json(result);
            
                     console.log(result);
                }
                console.log(req.body);
        }
        //res.redirect(302, '/list');
    }

}