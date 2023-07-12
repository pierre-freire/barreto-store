import Input from "../input";
import Select from "../select";

import styles from "./productList.module.css";

interface ProductListProps {
  data: Array<ProductCardProps>;
}

interface ProductCardProps {
  name: string;
  price: string;
  img: string;
}

function ProductList({ data }: ProductListProps) {
  function search(args: string) {
    console.log(args);
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Catálogo dos Produtos</h3>

      <div className={styles["filters-container"]}>
        <Input label="Pesquisa:" handler={search} />
        <Select label="Facção:" />
        <Select label="Ordenação:" />
      </div>

      <ul className={styles.list}>
        {data.map((elm, index) => {
          return (
            <ProductCard
              name={elm.name}
              price={elm.price}
              img={elm.img}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

function ProductCard({ name, price, img }: ProductCardProps) {
  function trim(str: string) {
    if (str.length > 28) return str.slice(0, 25).concat("...");
    return str;
  }

  return (
    <li className={styles.card}>
      <img className={styles["card-img"]} src={img} />
      <div className={styles.content}>
        <p>R$ {price}</p>
        <p>{trim(name)}</p>
      </div>
    </li>
  );
}

export default ProductList;
