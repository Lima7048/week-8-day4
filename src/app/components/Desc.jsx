"use server";
import { sql } from "@vercel/postgres";

export default async function SortDesc() {
  const data = (await sql`SELECT * from music ORDER BY ID DESC`).rows;

  return data.map((Songlog) => (
    <li key={Songlog.id}>
      <a href={`/songs/${Songlog.id}`} />
      {Songlog.title},{Songlog.artist},{Songlog.comment}
    </li>
  ));
}
