

import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styles from '../styles/secondPage.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { items } from "./components/ArticlePage/item";
import Partenariat from "./components/partenariat/partenariat";
import ImageArticle from "./components/imageArticle/imageArticle";
import Services from "./components/Nos_services/Services";
const imgg1 = new URL("../../public/assets/IMG_blog1.jpg",import.meta.url)
export default function ServicePage() {
  const router = useRouter()




  
  useEffect(() => {
    //use id to get article Data from back
  }, [])
  return (
<div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Services />
      <Footer />
  </div>
  )
}
