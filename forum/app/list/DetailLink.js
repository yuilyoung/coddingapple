'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default DetailLink => {
    let router = useRouter();
    let a = usePathname();
    console.log("url")
    console.log(a);
    console.log("useSearchParams");
    let b = useSearchParams();
    console.log(b);

    return (
        <button onClick={()=>{ router.push('/') }}>버튼</button>
    )
}