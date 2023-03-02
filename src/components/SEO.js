import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, keywords }) => {

    const {site} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  description
                  title
                  theme
                  keywords
                }
              }
        }
    `)

    const metadata = {
        title: title || site.siteMetadata?.title,
        description: description || site.siteMetadata?.description,
        theme: site.siteMetadata?.theme,
        keywords: keywords || site.siteMetadata?.keywords
    }

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
                "data-theme": metadata.theme,
            }}
            title={metadata.title}
            meta={[
                {
                    name: "description",
                    content: metadata.description
                },
                {
                    name: "keywords",
                    content: metadata.keywords
                }
            ]}
        />
    )
}

export default SEO