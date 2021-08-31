import React from 'react'
import { Helmet } from 'react-helmet'

function Head(props) {
  return (
    <Helmet>
      <body className={props.theme} />
    </Helmet>
  )
}

export default Head
