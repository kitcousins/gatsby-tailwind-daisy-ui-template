import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PageRoot from '../components/PageRoot'

import { ArrowSmallRightIcon } from "@heroicons/react/24/outline"

const Index = ({}) => {
  return (
    <PageRoot>
      <div className='w-screen flex flex-col'>
        <div className='hero h-screen bg-base-300 snap-center snap-always'>
          <StaticImage
            src='../images/icon.png'
            className='opacity-30 w-1/2 lg:w-1/4 aspect-square self-center lg:self-end place-self-center lg:place-self-end m-5 lg:m-20'
          />
          <div className='flex self-stretch items-end justify-between w-screen p-5 lg:p-20'>
            <div className='text-base-content'>
              <h1 className='text-6xl lg:text-7xl'>Kit's Gatsby Template</h1>
              <p className='ml-1 mt-5'>Built with TailwindCSS and DaisyUI for rapid, elegant static site development.</p>
              <a href='https://github.com/kitcousins' target="_blank" className='btn btn-outline mt-5 lg:mt-10'>Github <ArrowSmallRightIcon className='w-6 ml-1.5' /></a>
            </div>
          </div>
        </div>
        <div className='hero h-screen bg-base-100 snap-center snap-always'>
          <div className='hero-content'>
            <h1>Test</h1>
          </div>
        </div>
      </div>
    </PageRoot>
  )
}

export default Index