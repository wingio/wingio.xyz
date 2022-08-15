import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Grid from '../components/Grid'
import ProjectCard from '../components/ProjectCard'
import SocialLinks from '../components/SocialLinks'
import Title from '../components/Title'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wing</title>
        <meta name="description" content="I write the words that computers love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />

      <Grid>
        <ProjectCard name="Logra" description="Material You logcat viewer for Android" github='wingio/Logra'/>
        <ProjectCard name="Aperii" description="Open source social media site based off Twitter" github='Aperii' url='https://aperii.com'/>
      </Grid>

      <SocialLinks></SocialLinks>
    </div>
  )
}

export default Home
