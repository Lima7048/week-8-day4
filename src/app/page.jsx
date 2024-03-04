import Image from "next/image";
import Link from "next/link";
import duck from "@/../public/duck.jpeg";

export default function Home() {
  console.log("my home");
  return (
    <main>
      <div>
        <h1 className="font-mono m-1 text-blue-50 bg-green-100 bg-opacity-30 text-7xl flex flex-col items-center backdrop-blur">
          🤍 Welcome to my blog 🤍
        </h1>
        <Image
          className="bg-cover"
          src={duck}
          width={1800}
          height={1800}
          alt="Picture of animated water with ducks"
        />
      </div>
    </main>
  );
}
