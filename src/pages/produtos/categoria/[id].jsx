import { Footer } from "../../../components/Common/Footer";
import { Header } from "../../../components/Common/Header";
import { CardProduto } from "../../../components/Pages/Home/CardProdutos";
import { SERVER_IP } from "../../../config";
import { api } from "../../../services/api";
import styles from "./styles.module.css";

export default function Produtos({ produtos }) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              src={`${SERVER_IP}/images/${produto.img}`}
              nome={produto.nome}
              preco={produto["preço"]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const response = await api.get(`/produto/categoria/${id}`);

  return {
    props: {
      produtos: response.data,
    },
  };
}
