import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faBoxesStacked,
  faChartLine,
  faCompass,
  faFileInvoice,
  faMotorcycle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { icon } from "@fortawesome/fontawesome-svg-core";
import styles from "./navbar.module.css";

function Navbar() {
  const [path, setPath] = useState("/");

  const menu = [
    { href: "/", label: "Home", icon: faChartLine },
    { href: "/pedidos", label: "Pedidos", icon: faFileInvoice },
    { href: "/catalogo", label: "Catálogo", icon: faCompass },
    { href: "/estoque", label: "Estoque", icon: faBoxesStacked },
    { href: "/clientes", label: "Clientes", icon: faUser },
  ];

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
        {menu.map((elm, index) => {
          return (
            <ListItem
              key={index}
              path={path}
              href={elm.href}
              label={elm.label}
              icon={elm.icon}
            />
          );
        })}
      </ul>
    </nav>
  );
}

interface ListItemProps {
  path: string;
  href: string;
  label: string;
  icon: any;
}

function ListItem({
  path = "",
  href = "",
  label = "",
  icon = null,
}: ListItemProps) {
  return (
    <li>
      <a
        className={cn(`${styles.link} ${path === href ? styles.selected : ""}`)}
        href={href}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        {label}
      </a>
    </li>
  );
}

export default Navbar;
