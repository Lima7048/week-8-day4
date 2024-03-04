import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex flex-row p-3">
      <li className="m-4">
        <Link href="/">Home</Link>
      </li>
      {/* <li className="m-4">
        <Link href="/catalogue">Catalogue</Link>
      </li> */}
      <li className="m-4">
        <Link href="/add-post"> Add post</Link>
      </li>
      <li className="m-4">
        <Link href="/songs"> Songs</Link>
      </li>
    </div>
  );
}
