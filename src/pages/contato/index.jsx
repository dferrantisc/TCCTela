import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import { Header } from "../../components/Common/Header";

import styles from "./styles.module.css";
import { Footer } from "../../components/Common/Footer";

export default function Contato() {
  return (
    <>
      <Header />
      <main>
        <p className={styles.p}>
          <h2>Atendimento e Informações de Contato </h2>
          Está com Dúvida? Entre em contato
        </p>
        <p>
          Atendimento de SEGUNDA-FEIRA à SEXTA-FEIRA das 08:00hr as 18:00hr e
          SÁBADO das 08:00hr as 12:00hr.
        </p>

        <p className={styles.p}>
          <MdLocationOn /> Av. Dom Pedro II, 1163, Planalto - Caarapó/MS
        </p>

        <p className={styles.p}>
          <AiFillPhone /> +55(67) 3453-1039 / +55 (67) 9 9633-0541.
        </p>

        <div className="contatoinfo">
          <div className={styles.social}>
            <ul>
              <li className="facebook">
                <Link href="https://www.facebook.com/drieds.confeccoes">
                  <AiFillFacebook />
                </Link>
              </li>
              <li className="whatsapp">
                <Link href="https://api.whatsapp.com/send/?phone=5567998044370&text&app_absent=0">
                  <IoLogoWhatsapp />
                </Link>
              </li>
              <li className="instagram">
                <Link href="https://www.instagram.com/drieds_confeccoes/">
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
