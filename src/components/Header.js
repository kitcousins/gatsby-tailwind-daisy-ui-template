import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Navbar from './Navbar'

const Header = ({}) => {
    return (
        <div className='navbar bg-base-200 z-20 bg-opacity-95 fixed top-0 left-0 '>
            <div className='navbar-start' />
            <div className='navbar-center gap-5 w-full max-w-6xl'>
                <Link to='/'>
                    <StaticImage
                        src='../images/icon.png'
                        alt='Site Logo'
                        className='h-12 aspect-square'
                    />
                </Link>
                <Navbar />
            </div>
            <div className='navbar-end' />
        </div>
    )
}

export default Header