import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Form from "./Form";


export default function resume() {

  return (
    <div>
      <main className='bg-blue-100 px-10 md:px-20 lg:px-40 transition-all'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <Link href="/">
              <h1 className='text-4xl  text-cyan-400 font-VT323 bg-clip-text' >Nasrin.S</h1>
            </Link>
            <Form/>
            <ToastContainer/>
          </nav>
          
        </section>
      </main>
    </div>
  )
}
