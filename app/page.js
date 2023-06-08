"use client";
import BasicallyUsage from "./components/BasicallyUsage";
import CustomizedToast from "./components/CustomizedToast";
import ErrorToast from "./components/ErrorToast";
import LoadingToast from "./components/LoadingToast";
import OptionalUsage from "./components/OptionalUsage";
import SuccessToast from "./components/SuccessToast";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E7CBCB] flex flex-col items-center justify-center">
      <BasicallyUsage />
      <OptionalUsage />
      <SuccessToast />
      <ErrorToast />
      <LoadingToast />
      <CustomizedToast />
    </main>
  );
}
