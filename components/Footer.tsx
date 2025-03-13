import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <footer className='lg:h-1/12 flex flex-row justify-center px-1 pt-2 pb-4 text-md md:text-lg'>
      <div className=" flex justify-center  items-center">
          <a href='https://github.com/iPior' target="_blank" className='mr-8 hover:text-accent hover:font-bold hover:cursor-pointer'>
            <FontAwesomeIcon icon={faGithub} className='mr-1 ' />
            My Github
          </a>
      </div>
      <div className="flex justify-center items-center hover:text-accent hover:font-bold hover:cursor-pointer text-pretty">
        <a href='https://github.com/iPior/nextjs-spotify-dashboard' target="_blank" className='ml-8'>
          <FontAwesomeIcon icon={faCode} className='mr-1 font-bold' />
          Source Code
        </a>
      </div>
    </footer>
  )
}
