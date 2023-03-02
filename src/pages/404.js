import * as React from 'react'
import PageRoot from '../components/PageRoot'
import SEO from '../components/SEO'

const NotFound = ({}) => {
  return (
    <PageRoot seo={
      <SEO
        title={"404 - Not Found"}
      />
    }>
      <div className='hero flex-1'>
        <div className='hero-content'>
          <h1>Page Not Found</h1>
        </div>
      </div>
    </PageRoot>
  )
}

export default NotFound