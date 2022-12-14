import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const client_id = "aiwv2yj9emncbpev02p14orjclc85q";
  const redirect_uri = "http://localhost:3000/api/twitch";
  const response_type = "code";
  const scopes = ["user:read:email"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href={`https://id.twitch.tv/oauth2/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}`}
      >
        twitch login
      </a>
    </div>
  );
}
