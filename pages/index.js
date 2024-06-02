import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Embaby | Junior Penetration Testing</title>
        <meta name="description" content="I’m focused on building Secure web applications
            and Doing penetration testing on these Web Applications." />
        <link rel="icon" href="/assets/skills/react.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    </div>
  )
}
