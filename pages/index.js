import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import styles from './index.module.css'
import { useRouter } from 'next/router'

// Get data
import { getSortedPostsData } from '../lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: {
    allPostsData
  }}
}

export default function Home({allPostsData}) {

  const someValue = "yes"
  const router = useRouter()
  const posts = allPostsData.map(({id, date, title})=>{

    return (<li className={utilStyles.listItem} key={id}>
      <Date dateString={date} /> :: <Link href={'posts/' + id}>{title}</Link>
    </li>)

  })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={
          someValue === "yes" ? styles.yes :
          someValue === "no" ? styles.no :
          styles.maybe
        }>
          Raconteur, Image Consultant and Rhubarb Enthusiast
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <Link href="/posts/ssg-ssr">SSR Page is Here</Link><br></br>
        <Link href="/posts/pre-rendering">Pre-rendering page is Here</Link>
        
        <ul>
          {posts}
        </ul>

        <p>Router says this path is: {router.pathname}</p>

      </section>
    </Layout>
  )
}