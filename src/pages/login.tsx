import Head from "next/head";
import Input from "@/components/input";
import Button from "@/components/button";

import styles from "@/styles/Login.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <section className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <Input label="login" handler={() => {}} />
          <Input label="senha" handler={() => {}} type="password" />
          <Button label="Login" />
        </section>
      </main>
    </>
  );
}
