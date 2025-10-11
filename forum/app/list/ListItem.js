'use client'

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem(props) {
    let result = props.result;

    return (
        <div>
            {result.map((a, i) => {
            return (
            <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}>
            <h4>{a.title}</h4>
            </Link>
            <DetailLink />
            <Link href={'/edit/' + result[i]._id}>수정</Link>
            <span onClick={(e)=>{
                fetch('/api/post/delete', {method : 'DELETE', body: JSON.stringify(
                    {id: result[i]._id, 
                    email : result[i].author,
                    }
                )})
               // .then(()=>{window.location.reload()})
               .then((r)=> r.json())
               .then(()=>{
                e.target.parentElement.style.opacity = 0;
                setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'
                }, 1000);
               })
            //fetch('/api/test?name=yu&age=20');
            //fetch('/api/abc/kim');
            }}>🗑️</span>
            <p>1월 1일</p>
            </div>
            )
        })
        }
        </div>
    )
}