import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg'
import Layout from '../components/layout'

// const css = {position: "relative", maxWidth: "10em", width: "10em", height: "10em", maxHeight: "10em", outline: "3px solid red"}

export default function FirstPost(){
    return (
        <Layout>
            <h1>First Post</h1>

            <div>
                <Image
                    src={profilePic}
                />
            </div>
            
            <p>
                Go {' '}
                <Link href="/">
                    <a>home</a>
                </Link>
            </p>
        </Layout>
    )
}