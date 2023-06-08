"use client";
import { toast, Toaster } from "react-hot-toast";

const notify = () => {
  toast.loading("Loading..", {
    duration: 6000,
  });
};

export default function LoadingToast() {
  return (
    <main className="my-4">
      <Toaster />
      <button
        className="p-4 bg-[#99627A] shadow-md rounded-md"
        onClick={() => notify()}
      >
        Loading Toast
      </button>
    </main>
  );
}
