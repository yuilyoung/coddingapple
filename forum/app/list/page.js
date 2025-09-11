import connectDB from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async List => {
    //let client = await connectDB;
    //const database = client.db('forum');
    const database = (await connectDB).db('forum')
    let result = await database.collection('post').find().toArray();

    let onClickList = () => {
        console.log('click');
    }

    return (
    <div className="list-bg">
        {
        result.map((a, i) => {
            return (
            <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}>
            <h4>{a.title}</h4>
            </Link>
            <DetailLink />
            <Link href={'/edit/' + result[i]._id}>수정</Link>
            <p>1월 1일</p>
            </div>
            )
        })
        }
    </div>
    );
}