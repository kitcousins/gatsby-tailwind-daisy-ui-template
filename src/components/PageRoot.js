import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import SEO from './SEO'

const PageRoot = ({ seo, children }) => {
    return (
        <main className='w-screen flex flex-col justify-between min-h-screen'>
            { seo || <SEO /> }
            <Header />
            { children }
            <Footer />
        </main>
    )
}

export default PageRoot