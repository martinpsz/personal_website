import React from "react"
import {Helmet} from 'react-helmet'
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

const SEO = () => (
    <StaticQuery 
        query={graphql`
            query SEO {
                site {
                    siteMetadata {
                        title
                        description 
                        siteUrl
                    }
                }
            }
        `}

        render={data =>
                <Helmet title={data.site.siteMetadata.title}
                    htmlAttributes={{
                        lang: "en"
                    }}>
                    <meta name="description" content={data.site.siteMetadata.description}/>
                    <link rel="canonical" url={data.site.siteMetadata.siteUrl}/>
                </Helmet>
                
        }
    
    />
)

export default SEO


SEO.prototypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
}

SEO.defaultProps = {
    title: null,
    description: null,
    url: null
}