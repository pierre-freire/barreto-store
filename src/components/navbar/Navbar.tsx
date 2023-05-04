import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faBoxesStacked,
  faChartLine,
  faFileInvoice,
  faMotorcycle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import styles from "./navbar.module.css";

function Navbar() {
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname);
    console.log(window.location.pathname);
  }, []);

  return (
    <nav>
      <div className={styles.logo}>
        <div className={styles["logo-icon"]}>
          <FontAwesomeIcon icon={faMotorcycle} />
        </div>
        <p>
          Barreto
          <br />
          Machine
        </p>
      </div>
      <ul className={styles.list}>
        <li>
          <a
            className={cn(
              `${styles.link} ${path === "/" ? styles.selected : ""}`
            )}
            href="/">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            Dashboards
          </a>
        </li>
        <li>
          <a
            className={cn(
              `${styles.link} ${path === "/pedidos" ? styles.selected : ""}`
            )}
            href="/pedidos">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faFileInvoice} />
            </div>
            Pedidos
          </a>
        </li>
        <li>
          <a
            className={cn(
              `${styles.link} ${path === "/estoque" ? styles.selected : ""}`
            )}
            href="/estoque">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faBoxesStacked} />
            </div>
            Estoque
          </a>
        </li>
        <li>
          <a
            className={cn(
              `${styles.link} ${path === "/clientes" ? styles.selected : ""}`
            )}
            href="/clientes">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            Clientes
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
