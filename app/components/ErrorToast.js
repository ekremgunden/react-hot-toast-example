"use client";
import { toast, Toaster } from "react-hot-toast";

const notify = () => {
  toast.error("bip bap bop ! Error");
};

export default function ErrorToast() {
  return (
    <main className="my-4">
      <Toaster />
      <button
        className="p-4 bg-[#99627A] shadow-md rounded-md"
        onClick={() => notify()}
      >
        Error Toast
      </button>
    </main>
  );
}
