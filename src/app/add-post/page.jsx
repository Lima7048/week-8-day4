import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitButton from "@/app/components/SubmitButton";
export default function Post() {
  async function handleAddSong(formData) {
    "use server";
    const artist = formData.get("artist");
    const title = formData.get("title");
    const comment = formData.get("comment");

    const data =
      await sql`INSERT INTO music (artist,title,comment) VALUES (${artist}, ${title},${comment})`;

    revalidatePath("/add-post");
    redirect("/songs");
  }

  return (
    <div>
      <h2 className=" font-mono m-1 text-blue-50 bg-green-100 bg-opacity-30 text-6xl flex flex-col items-center ">
        Whats your vibe?
      </h2>
      <form
        action={handleAddSong}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <label className="m-1 text-slate-700 text-4xl "> Artist Name</label>
        <input name="artist" placeholder="artist" />

        <label className="m-1 text-slate-700 text-4xl">Song Title </label>
        <input name="title" placeholder="title" />

        <label className="m-1 text-slate-700 text-4xl">Comment</label>
        <input name="comment" placeholder="comment" />

        {/* <label className=''></label>
        <input name='' placeholder=''/> */}
        <SubmitButton />
      </form>
    </div>
  );
}
