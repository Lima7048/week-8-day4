import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";

export default function Post() {
  async function handleAddSong(formData) {
    "use server";
    const artist = formData.get("artist");
    const title = formData.get("title");
    const comment = formData.get("comment");

    await sql`INSERT INTO music (artist,title,comment) VALUES (${artist}, ${title},${comment})`;

    revalidatePath("/catalogue");
    redirect("/catalogue");
  }

  return (
    <div>
      <h2>Whats your vibe?ß</h2>
      <form action={handleAddSong} className="">
        <label className="">Name</label>
        <input name="artist" placeholder="artist" />

        <label className="">Name</label>
        <input name="title" placeholder="title" />

        <label className="">Name</label>
        <input name="comment" placeholder="comment" />

        {/* <label className=''></label>
        <input name='' placeholder=''/> */}
        <SubmitButton />
      </form>
    </div>
  );
}
