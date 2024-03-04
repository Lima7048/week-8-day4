"use server ";
import { sql } from "@vercel/postgres";

export default async function SortAsc() {
  const data = (await sql`SELECT * from music ORDER BY ID ASC`).rows;
  <></>;
  return data.map((Songlog) => (
    <li key={Songlog.id}>
      <a href={`/songs/${Songlog.id}`} />
      {Songlog.title},{Songlog.artist},{Songlog.comment}
    </li>
  ));
}
