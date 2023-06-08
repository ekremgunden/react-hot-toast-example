"use client";
import { toast, Toaster } from "react-hot-toast";

const notify = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://telegra.ph/file/5e2b160cfa16c8784b126.png"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">WHATSAPP</p>
            <p className="mt-1 text-sm text-gray-500">You can have a message</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm text-black font-medium focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

export default function OptionalUsage() {
  return (
    <main className="my-4">
      <Toaster />
      <button
        className="p-4 bg-[#99627A] shadow-md rounded-md"
        onClick={() => notify()}
      >
        Optional Usage
      </button>
    </main>
  );
}
