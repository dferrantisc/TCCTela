/* eslint-disable @next/next/no-img-element */
import { Footer } from "../../components/Common/Footer";
import { Header } from "../../components/Common/Header";
import { ADMIN_IP, SERVER_IP } from "../../config";
import { api } from "../../services/api";

import styles from "./styles.module.css";

export default function Sorteios({ sorteios }) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          {sorteios.map((sorteio) => {
            const dataAtual = new Date();
            console.log(sorteio);
            const sorteioInvalido =
              sorteio.ganhadores.length > 0 ||
              dataAtual < new Date(sorteio.datainicio) ||
              dataAtual > new Date(sorteio.datafim)
                ? true
                : false;

            return (
              <div key={sorteio.idsort} className={styles.card}>
                <img
                  src={`${SERVER_IP}/images/${sorteio.imagem}`}
                  alt={sorteio.nome}
                />
                <div className={styles.content}>
                  <h1>{sorteio.nome}</h1>
                  <p>{sorteio.descricao}</p>
                  <strong>
                    Número de ganhadores: {sorteio.quantidade_ganhadores}
                  </strong>
                </div>
                <button
                  disabled={sorteioInvalido}
                  onClick={() =>
                    (window.location.href = `${ADMIN_IP}/sorteio/${sorteio.idsort}`)
                  }
                >
                  {sorteioInvalido ? "Sorteio finalizado" : "Participar"}
                </button>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await api.get("/sorteio").catch(console.log);

  return {
    props: {
      sorteios: response.data,
    },
  };
}
