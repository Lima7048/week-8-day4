import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

import Asc from "@/app/components/Asc";
import Desc from "@/app/components/Desc";
import SortAsc from "@/app/components/Asc";
import SortDesc from "@/app/components/Desc";

export default async function Songlog() {
  "use server";
  const data = (await sql`SELECT * from music `).rows;

  revalidatePath("/songs");

  return (
    <div>
      <h2 className=" font-mono m-1 text-blue-50 bg-green-100 bg-opacity-30 text-6xl flex flex-col items-center backdrop-blur ">
        List of Posts
      </h2>
      <Asc />
      <Desc />
      {/* <button onClick={SortAsc}>Acsending Order</button>
      <button onClick={SortDesc}>Decending Order</button> */}
      <ul className=" m-3 bg-indigo-900 bg-opacity-60 backdrop-blur border rounded-md p-4 ">
        {data.map((Songlog) => (
          <li key={Songlog.id}>
            <a href={`/songs/${Songlog.id}`}>
              {Songlog.title},{Songlog.artist},{Songlog.comment}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* <h3>{Songlog.artist}</h3>
      <p>{Songlog.title}</p>
      <p>{Songlog.comment}</p> */
