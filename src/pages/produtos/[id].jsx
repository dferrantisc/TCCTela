import { Footer } from "../../components/Common/Footer";
import { Header } from "../../components/Common/Header";
import { SERVER_IP } from "../../config";
import { api } from "../../services/api";

import styles from "./produto.module.css";

export default function Produtos({ produto }) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <img src={`${SERVER_IP}/images/${produto.img}`} alt={produto.nome} />
          <div>
            <h4>{produto.categoria.nome}</h4>
            <h2>{produto.nome}</h2>
            <p>R$ {produto["preço"]}</p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send/?phone=5567998044370&text&app_absent=0")
              }
            >
              Entre em contato
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const response = await api.get(`/produto/${id}`);

  console.log(response.data);

  return {
    props: {
      produto: response.data,
    },
  };
}
