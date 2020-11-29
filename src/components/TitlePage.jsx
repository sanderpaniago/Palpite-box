import React from 'react'
import Head from 'next/head'

const TitlePage = ({ title }) => {
    return(
        <Head>
            <title>{title} - PalpiteBox</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default TitlePage