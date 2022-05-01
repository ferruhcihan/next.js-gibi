import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface IHome {
  quote: string;
}

const Home: NextPage<IHome> = ({ quote }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gibi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>&quot;{quote}&quot;</h1>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/quotes`);
  const { quote } = await res.json();

  // Pass data to the page via props
  return { props: { quote } };
}
