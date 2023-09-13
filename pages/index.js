import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <b>Hello</b>! My name is <b>Soumil Dharaskar</b>. I am an avid
          Software Engineer, proficient in C/C++, Python, Java, JavaScript,
          TypeScript, and a variety of other tools and frameworks!{' '}
        </p>
        <p>
          Feel free to visit my{' '}
          <a href='https://www.linkedin.com/in/soumil-dharaskar-45b90119b/'>
            LinkedIn
          </a>{' '}
          and <a href='https://github.com/SoumilDharaskar'>GitHub</a> to learn
          more about me!
        </p>
      </section>
    </Layout>
  );
}
