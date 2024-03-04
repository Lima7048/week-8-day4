"use server";
import { sql } from "@vercel/postgres";

export default async function SortDesc() {
  const data = (await sql`SELECT * from music ORDER BY ID DESC`).rows;

  return data.map((Songlog) => (
    <div
      className=" backdrop-blur m-3 bg-indigo-800 bg-opacity-40 border rounded-md p-1 "
      key={Songlog.id}
    >
      <a href={`/songs/${Songlog.id}`} />
      <p className="font-sans mb-1 text-2xl items-center text-green-50  ">
        {Songlog.title}
      </p>
      <p className="font-semibold mb-2 text-blue-900 uppercase">
        {" "}
        {Songlog.artist}
      </p>

      <p className="font-sans mb-2 text-white font-light">{Songlog.comment}</p>
    </div>
  ));
}
