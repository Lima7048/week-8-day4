import Link from "next/link"
export default function Nav(){
    return(
<ol className="flex flex-row p-3">
<li className="m-4"><Link href='/'>Home</Link></li>
<li className="m-4"><Link href='/catalogue'>catalogue</Link></li>
<li className="m-4"><Link href='/catalogue/add-post'> add post</Link></li>
</ol>
</div>
)}