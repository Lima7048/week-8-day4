import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex flex-row p-3">
      <li className="m-4">
        <Link href="/">Home</Link>
      </li>
      <li className="m-4">
        <Link href="/add-post">catalogue</Link>
      </li>
      <li className="m-4">
        <Link href="/add-post"> add post</Link>
      </li>
    </div>
  );
}
