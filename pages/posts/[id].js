import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths(){
    const marmoset = 3
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    console.log(`Dat postData tho: ${JSON.stringify(postData, null, 4)}`)
    return {
        props: { postData }
    }
}

export default function Post({postData}){
    return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/">Home</Link>
    </Layout>

    )
}