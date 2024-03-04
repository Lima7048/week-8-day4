"use server ";
import { sql } from "@vercel/postgres";

export default async function SortAsc() {
  const data = (await sql`SELECT * from music ORDER BY ID ASC`).rows;
  <></>;
  return data.map((Songlog) => (
    <div
      className=" backdrop-blur m-2 bg-indigo-500 bg-opacity-30 border rounded-md p-4 "
      key={Songlog.id}
    >
      <a href={`/songs/${Songlog.id}`} />
      <p className="font-sans mb-1 text-2xl items-center text-green-50  ">
        {Songlog.title}
      </p>
      <p className="font-semibold mb-2 text-blue-900 uppercase">
        {Songlog.artist}
      </p>

      <p className="font-sans mb-2 text-white font-light">{Songlog.comment}</p>
    </div>
  ));
}
