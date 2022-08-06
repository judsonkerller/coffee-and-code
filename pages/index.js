import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request';

import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styles from '/styles/Home.module.css'

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl5irmblc0xmy01uj4674cuk2/master"
);

const QUERY = gql`
  {
    posts {
      id,
      title,
      datePublished,
      slug,
      content {
        html
      }
      author {
        name,
        avatar {
          url
        }
      }
      coverPhoto {
          url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return{
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home( {posts} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee and Code</title>
        <meta name="description" content="Um blog sobre tecnologia!" />
        <link rel="icon" href="/assets/logo-head.png" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard 
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}