
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import {ToastContainer ,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


  const initValues = {name: '',email: '',subject: '',message: ''};

  const initState = { values: initValues}


export default function Form() { 
  
  const [state, setState] = useState(initState); 

  const {values} = state;
  
  const handleChange = ({ target }) => {
     setState((prev) => ({
       ...prev,
       values: {
        ...prev.values,
        [target.name] : target.value,
       },

    }))};

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const req = await sendContactForm(e);
          if (req.status === 200) {
            toast.success(` 🙌🏻 Nachricht wurde erfolgreich gesendet ${values.name}`, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 8000,});
          }
       
        }catch (e) { 
          toast.error(`🥺 Es gibt ein Problem ${values.name}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000,
          });
        }
        setState (initState);
      };  
      
  return (
    <div className="b py-16 bg-blue-100 px-4 sm:px-6 h-screen w-screen flex justify-center items-center ">
    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
      <form onSubmit={submitHandler}
        className="grid grid-cols-1 gap-y-6">
        <div>
        <p className='text-2xl text-center text-teal-400 font-medium  py-10 px-4  justify-center'>Wenn Sie an meinem Lebenslauf interessiert sind, kontaktieren Sie mich einfach per E-Mail.</p>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            name="name" type="text" required value={values.name} onChange={handleChange}
            minLength="3"
            className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-cyan-200 focus:border-cyan-200 border-gray-300 rounded-md focus:outline-none focus:ring-2'
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor='email' className="sr-only">
            Email
          </label>
          <input type="email" name="email" required value={values.email} onChange={handleChange}

            className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-cyan-300 focus:border-cyan-300 border-gray-300 rounded-md focus:outline-none focus:ring-2'
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input name="subject" type="text" required minLength="3" value={values.subject} onChange={handleChange}
            
            className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-teal-300 focus:border-teal-300 border-gray-300 rounded-md focus:outline-none focus:ring-2'
            placeholder="Subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message" type="text" required rows="4" value={values.message} onChange={handleChange}
            minLength="10"
            maxLength="120"
            className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-teal-400 focus:border-teal-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 '
            placeholder="Message"></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
            >Submit</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  </div>
  )
}
