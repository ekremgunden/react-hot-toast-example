"use client";
import { toast, Toaster } from "react-hot-toast";

const notify = () => {
  toast.success("Successfully logined!");
};

export default function SuccessToast() {
  return (
    <main className="my-4">
      <Toaster />
      <button
        className="p-4 bg-[#99627A] shadow-md rounded-md"
        onClick={() => notify()}
      >
        Success Toast
      </button>
    </main>
  );
}
