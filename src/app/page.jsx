import Image from "next/image";
import Link from "next/link";
import duck from "@/../public/duck.jpeg";

export default function Home() {
  console.log("my home");
  return (
    <main>
      <div>
        <h1 className="text-white color; text-center">
          Welcome to my blog space
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
