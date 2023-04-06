import { useState } from 'react';
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Gisselle Pombar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'> 
          <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Developed by Gisselle</h1>
          <ul className='flex items-center'>
            <li>
            <BsFillMoonStarsFill 
              onClick={() => setDarkMode(!darkMode)} 
              className=' cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
            </li>
          </ul>
          </nav>
            <div className=' text-center p-10'>
              <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
                Gisselle Pombar
              </h2>
              <h3 className='text-2xl py-2 md:text-3xl'>
                Developer and designer.
              </h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
                Freelancer providing services for programming needs. Join me down below and let's get started.
              </p>
                <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                  <AiFillTwitterCircle />
                  <AiFillLinkedin />
                  <AiFillYoutube />
                </div>
            </div>
        </section>

      {/* second page */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>Since the beginning of my journey as a freelance developer, I've done remote work for
              <span className='text-teal-500'> agencies </span>
            consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className=' text-md py-2 leading-8 text-gray-80'>I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div>
            <div>
              Image
            </div>
          </div>
          <section>
            <div>
              <h3 className='text-3xl py-1'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-80'>Since the beginning of my journey as a freelance developer, I've done remote work for
              <span className='text-teal-500'> agencies </span>
            consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            </div>
            <div>
              <div>Images</div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
