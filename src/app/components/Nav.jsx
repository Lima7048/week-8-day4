import Link from "next/link";
export default function Nav() {
  return (
    <div className=" flex flex-column p-0.25 font-mono m-1 text-blue-50 bg-green-100 bg-opacity-30 text-3xl items-center backdrop-blur">
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
