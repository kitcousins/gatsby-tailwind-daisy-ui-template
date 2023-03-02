import { Link } from 'gatsby'
import * as React from 'react'

import { Bars3Icon } from "@heroicons/react/24/solid"

const links = [
    {
        title: "About",
        url: "/"
    },
    {
        title: "Services",
        url: "/"
    },
    {
        title: "Blog",
        url: "/"
    },
]

const Navbar = ({}) => {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    return (
        <>
            <div className='lg:flex flex-row items-center gap-3 hidden'>
                {links.map(({ title, url }) => <Link className='hover:border-b-2 border-secondary transition' to={url}>{title}</Link>)}
            </div>
            <div className='flex-1 flex lg:invisible'>
                <div className='flex-1' />
                <div className='' onClick={() => setMobileMenuOpen(mobileMenuOpen ? false : true)}>
                    <Bars3Icon className='w-8 mr-2 aspect-square justify-self-end dropdown dropdown-bottom relative' />
                </div>
                {
                    mobileMenuOpen ?
                        <div className='dropdown-content menu absolute translate-y-full bottom-0 right-0 bg-base-200 w-full shadow-md'>
                            {links.map(({ title, url }) => <Link className='p-5 border-b-2 border-base-300 last:border-b-0 active:bg-secondary active:text-secondary-content transition-colors' to={url}>{title}</Link>)}
                        </div> :
                        null
                }
            </div>
        </>
    )
}

export default Navbar