'use client';

import { usePathname, useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation";

export default DetailLink => {
    let router = useRouter();
    let a = usePathname();
    console.log("url");
    console.log(a);
    //console.log("router");
    //console.log(router);
    //console.log("useSearchParams");
    //let b = useSearchParams();
    //console.log(b);

    return (
        <button onClick={()=>{ router.push('/') }}>버튼</button>
    )
}