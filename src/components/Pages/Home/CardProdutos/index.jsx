/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import styles from "./styles.module.css";

export function CardProduto({ id, src, nome, preco }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={nome} />
      <p className={styles.nome}>{nome}</p>
      <span className={styles.preco}>R$ {preco}</span>
      <button onClick={() => router.push(`/produtos/${id}`)}>
        Ver detalhes
      </button>
    </div>
  );
}
