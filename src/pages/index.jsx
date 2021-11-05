import React from "react";

import { Catalogo } from "../components/Pages/Home/Catalogo";
import { Header } from "../components/Common/Header";
import { Footer } from "../components/Common/Footer";
import { QuemSomos } from "../components/Pages/Home/QuemSomos";

import styles from "./styles.module.css";
import { api } from "../services/api";

export default function Index({ produtos }) {
  return (
    <>
      <Header />
      <main>
        <Catalogo produtos={produtos} />
        <div className={styles.divider}></div>
        <QuemSomos />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await api.get("/produto");

  return {
    props: {
      produtos: response.data,
    },
  };
}
