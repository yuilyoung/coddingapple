import connectDB from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export default async List => {
    //let client = await connectDB;
    //const database = client.db('forum');
    const database = (await connectDB).db('forum')
    let result = await database.collection('post').find().toArray();

    result = result.map(item => ({
    ...item,
    _id: item._id.toString()
    }));

    console.log("iyyu list");
    console.log(result);

    return (
    <div className="list-bg">
        <ListItem result={result}/>
    </div>
    );
}