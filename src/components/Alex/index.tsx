/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { apiGithub } from "../../services/api";
import styles from "./styles.module.scss";
import Link from "next/link";

interface IOwner {
  login: string;
}

interface IRepo {
  name: string;
  html_url: string;
  owner: IOwner;
}

export default function Alex() {
  const [repos, setRepos] = useState<IRepo[]>({} as IRepo[]);
  useEffect(() => {
    apiGithub
      .get("/alexercolin/repos")
      .then((response) => {
        console.log(response.data);
        setRepos(response.data);
      })
      .catch(() => {
        setRepos({} as IRepo[]);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.companyImage}
          src="/images/alex.png"
          alt="Picture to represent the partnership"
        />
        <h2>Alex Ercolin Oliveira</h2>
      </div>
      <div className={styles.content}>
        <p>
          Formado em Engenharia de Produção pela Faculdade de Engenharia de
          Sorocaba (FACENS) e certificação Green Belt. Atualmente sou
          Desenvolvedor Júnior na Empresa Eduzz, com foco em PHP e Javascript.
          Possuo 5 anos de experiência na indústria passando em empresas como
          Schaeffler, Hydro e Werkzeugmaschinenlabor. Tech Skills - JavaScript,
          TypeScript React, Redux, Next.js, PHP, Laravel, Node.js, git, HTML,
          CSS, SASS, SQL e MongoDB.
        </p>
        <ul>
          {repos.length > 0 &&
            repos.map((repo, index) => (
              <li key={index}>
                <Link href={repo.html_url}>
                  <a target="_blank">{repo.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
