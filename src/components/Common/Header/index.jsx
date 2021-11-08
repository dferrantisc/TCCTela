import Link from "next/link";
import Image from "next/Image";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function Header() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/categoria");

      setCategorias(response.data);
    }
    getData();
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image src="/logo.png" alt="Logo" width="200px" height="65px" />
        <ul>
          <li>
            <Link href="/"> Início </Link>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a href="/produtos" className={styles.dropbtn}>
                Produtos
              </a>

              <div className={styles.dropdownContent}>
                {categorias.map((categoria) => (
                  <Link
                    key={categoria.idcatg}
                    href={`/produtos/categoria/${categoria.idcatg}`}
                  >
                    {categoria.nome}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link href="/sorteios"> Sorteios </Link>
          </li>
          <li>
            <Link href="/contato"> Contato </Link>
          </li>
          <li>
            <Link href="http://localhost:3000/auth/login"> Área de Acesso </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
