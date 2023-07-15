import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props:{Content:any}) {
  return (
    <React.Fragment>
        <Header/>
        <props.Content/>
        <Footer/>
    </React.Fragment>
  )
}
