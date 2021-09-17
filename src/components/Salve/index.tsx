import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";
import ReactWhatsapp from "react-whatsapp";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
      <div className={styles.content}>
        <h2>Mande um salve por email!</h2>
        <div className={styles.grid}>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input
                required
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input
                required
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="telephone">Telefone</label>
              <input
                required
                id="telephone"
                type="tel"
                name="telephone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="company">Empresa</label>
              <input
                required
                id="company"
                type="text"
                name="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </p>
            <p>
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </p>
          </form>
          <h3>Ou pelo WhatsApp</h3>
          <ReactWhatsapp
            className={styles.whatsAppButton}
            number="+55 (15) 99124-6343"
          >
            <AiOutlineWhatsApp size={35} />
          </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
}
