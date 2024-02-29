"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="">
      {pending ? "Adding song..." : "Add sond"}
    </button>
  );
}
