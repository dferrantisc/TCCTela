/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import { CardProduto } from "../CardProdutos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { SERVER_IP } from "../../../../config";

export function Catalogo({ produtos }) {
  return (
    <section className={styles.catalogo}>
      <div className={styles.catalogoTitle}>
        <h3>Dried's Confecções</h3>
        <p>Vestindo você e sua família</p>
      </div>
      <div className={styles.catalogoSlider}>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
        >
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              src={`${SERVER_IP}/images/${produto.img}`}
              nome={produto.nome}
              preco={produto["preço"]}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
