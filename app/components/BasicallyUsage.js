"use client";
import { toast, Toaster } from "react-hot-toast";

const notify = () => {
  toast("My first toast notification");
};

export default function BasicallyUsage() {
  return (
    <main className="my-4">
      <Toaster />
      <button
        className="p-4 bg-[#99627A] shadow-md rounded-md"
        onClick={() => notify()}
      >
        Basically Usage
      </button>
    </main>
  );
}
