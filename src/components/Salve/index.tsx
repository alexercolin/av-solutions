import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";
import ReactWhatsapp from "react-whatsapp";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";

export default function Salve() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (name && email && telephone && company && message) {
      api
        .post("/send-email", { name, email, telephone, company, message })
        .then((response) => {
          console.log("deu certo");
        })
        .catch(() => {
          console.log("deu errado");
        });
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.content} + ${styles.salveImage}`}>
        <img src="/images/contact-gif.gif"></img>
      </div>
      <div className={styles.content}>
        <h2>Manda um salve por email!</h2>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              required
              placeholder="Nome"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              required
              placeholder="E-mail"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              placeholder="Telefone"
              id="telephone"
              type="tel"
              name="telephone"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
            <input
              required
              placeholder="Empresa"
              id="company"
              type="text"
              name="company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
            <textarea
              required
              placeholder="Mensagem"
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button className={styles.submitButton} type="submit">
              Enviar <FaPaperPlane className={styles.airplaneIcon} />
            </button>
          </form>
        </div>
        <div className={styles.whatsAppContainer}>
          <h3>Manda no Whats!</h3>
          <ReactWhatsapp
            className={styles.whatsAppButton}
            number="+55 (15) 99124-6343"
          >
            <AiOutlineWhatsApp size={25} />
          </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
}
