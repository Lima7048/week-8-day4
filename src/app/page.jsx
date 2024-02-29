import Image from "next/image";
import music from "./components/Music/add-post/page";

export default function Home() {
  console.log("my home");
  return (
    <main>
      <div>
        <h1>Welcome to my blog space</h1>
        <body
          className={` bg-[url('https://i.pinimg.com/564x/2f/96/5b/2f965bc2270b0e61b6fc0cc9ad8c8dde.jpg')] bg-cover`}
        ></body>
      </div>
    </main>
  );
}
