"use client";
import { toast, Toaster } from "react-hot-toast";

const notify = () => {
  toast.success("Successfully logined!", {
    position: "bottom-right",
    style: {
      border: "8px solid #643843",
      borderRadius: "12px",
      padding: "16px",
      color: "#643843",
    },
    iconTheme: {
      primary: "#99627A",
    },
  });
};

export default function CustomizedToast() {
  return (
    <main className="my-4">
      <Toaster />
      <button
        className="p-4 bg-[#99627A] shadow-md rounded-md"
        onClick={() => notify()}
      >
        Customized Toast
      </button>
    </main>
  );
}
