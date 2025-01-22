import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <footer className='flex flex-row justify-center p-4 text-s'>
      <div className=" flex justify-center  items-center">
          <a href='' target="_blank" className='mr-8'>
            <FontAwesomeIcon icon={faGithub} className='mr-1' />
            My Github
          </a>
      </div>
      <div className="flex justify-center items-center">
        <a href='' target="_blank" className='ml-8'>
          <FontAwesomeIcon icon={faCode} className='mr-1' />
          Source Code
        </a>
      </div>
    </footer>
  )
}
