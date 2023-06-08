'use client'
import { toast , Toaster } from "react-hot-toast"

const notify = () => {toast("Hello World")}

export default function Home() {
  return (
    <main>
      <Toaster/>
      <div className="p-4 bg-blue-300 shadow-md rounded-md" onClick={()=>notify()} >Make Toast</div>
    </main>
  )
}
