import Head from "next/head";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductList from "@/components/productList";

import styles from "@/styles/Catalogo.module.css";

const products = [
  {
    name: "armadura grande",
    price: "19,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
  {
    name: "armadura media",
    price: "12,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
  {
    name: "armadura pequena",
    price: "13,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
  {
    name: "pessoa grande",
    price: "165,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
  {
    name: "pessoa media",
    price: "17,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
  {
    name: "pessoa pequena",
    price: "29,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
  {
    name: "inseto grande",
    price: "65,99",
    img: "https://i.pinimg.com/originals/0e/79/91/0e7991ecc481a20fe097196fad22cbf8.png",
  },
];

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Catálogo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          <span>
            <FontAwesomeIcon icon={faCompass} />
          </span>
          Catálogo
        </h1>
        <ProductList data={products} />
      </main>
    </>
  );
}
