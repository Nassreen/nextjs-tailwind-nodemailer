import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import darkdev from '..public/nasrin-dark.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import { useState } from 'react'
import Link from 'next/link'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Nasrin.S Portfolio</title>
      </Head>
      <main className='bg-gray-50 px-10 md:px-20 lg:px-40 dark:bg-gray-700 transition-all'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-0 flex justify-between'>
            <h1 className='text-4xl  text-gray-800 font-VT323 dark:text-teal-100  bg-clip-text' >Nasrin.S</h1>
            <ul className='flex item-center'>
              <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl  dark:text-white' /> </li>
              <li>
              <Link href="/resume"
                 className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className='text-center p-3'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl  dark:text-teal-300'>Nasrin Salahshouri</h2>
            <h3 className='text-2xl py-2  dark:text-gray-200'>Software Entwickler</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto  dark:text-gray-300'>
            Programmieren ist für mich nicht nur eine Arbeit! <br />Sondern mein <span className='text-gray-800 dark:text-teal-200' >Hobby</span> .
            </p>
          </div>
          <div className='relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-5 overflow-hidden md:h-96 md:w-96 dark:from-teal-200' >

            < Image src={darkMode ? darkdev : deved } alt='' className='layout-fill-none objectFit-cover '/> 
          
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <AiFillTwitterCircle />
             <Link  href="https://www.linkedin.com/in/nasrin-salahshouri-b0746386/"> <AiFillLinkedin /> </Link>
             <Link href="https://www.github.com/Nassreen"> <AiFillGithub/> </Link>
          </div>
          <section>
            <div>
              <h3 className='text-3xl py-1 dark:text-gray-200  bg-clip-text'> Portofolio </h3>
              <p className=' dark:text-gray-300'>
              Seit Beginn der Reise zum Software-Entwickler, Auf diese Weise lerne ich mehr und mehr neue Fähigkeiten. Nach mehreren Jahren der Arbeit mit <span className='text-teal-500  dark:text-teal-400'> Javascript </span> Technologien im Frontend, einschließlich javascript Vanila &<span className='text-teal-400  dark:text-teal-500'> React</span> , ist es Zeit für<span className='text-teal-300  dark:text-teal-600'> Next.js </span>.<br/> Meine Backend-Erfahrung ist mit <span className='text-teal-600  dark:text-teal-300 '> Node.js </span>,  <span className='text-teal-500  dark:text-teal-400 '> MongoDB </span> und <span className='text-teal-400  dark:text-teal-500 '>Express</span> .
              </p>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-xl p-10 rounded-xl my-10 grow display=none;  dark:bg-slate-200'>
                <Image src={design} alt='' width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Diese Webseite enthält</h3>
                <h4 className='py-4 text-teal-600'>Welche Technologien für die Gestaltung dieser Website verwendet wurden.</h4>
                <p className='text-gray-800 py-1'> Next.Js</p>
                <p className='text-gray-800 py-1'> TailwindCss</p>
                <p className='text-gray-800 py-1'> Nodemailer</p>
              </div>
              <div className='text-center shadow-xl p-10 rounded-xl my-10 grow  dark:bg-slate-200'>
                <Image src={code} alt='' width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>MERN Stack Entwickler</h3>
                <h4 className='py-4 text-teal-600'>Was ich zur Erstellung einer Seite verwende.</h4>
                <p className='text-gray-800 py-1'> MongoDB</p>
                <p className='text-gray-800 py-1'> Express</p>
                <p className='text-gray-800 py-1'> React</p>
                <p className='text-gray-800 py-1'> Node.JS</p>
              </div>
              <div className='text-center shadow-xl p-10 rounded-xl my-10 grow  dark:bg-slate-200'>
                <Image src={consulting} alt='' width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Was sonst...</h3>
                <h4 className='py-4 text-teal-600'>Meine Freunde helfen mir bei der Arbeit im Homeoffice/mit der Gruppe</h4>
                <p className='text-gray-800 py-1'> Docker</p>
                <p className='text-gray-800 py-1'> Git/GitHub/GitLab</p>
                <p className='text-gray-800 py-1'> Jira </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

