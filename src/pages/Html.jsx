import React from 'react'
import Header from "../components/header";
import Footer from '../components/Footer';
import MainContent from "../components/MainContent";
const html = () => {
  return (
    <div>
     <Header/>
    <MainContent pageName="html" />
      <Footer/>
    </div>
  )
}

export default html