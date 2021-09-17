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
          Sou formado em Análise e Desenvolvimento de Sistema pela Faculdade de
          Tecnologia de Sorocaba (FATEC). Atualmente sou Desenvolvedor Pleno,
          com foco em PHP e Javascript. Participo do desenvolvimento de sites,
          APIs e microserviços. Essas atividades me proporcionam um conhecimento
          amplo de diversas áreas e me fazem compreender melhor sua integração.
          Nesse período estou me aprofundando nas tecnologias às quais já estou
          habituado e adquirindo novos conhecimentos, por exemplo em React e
          Nest. No meu tempo livre procuro estudar as tecnologias que utilizo no
          dia a dia e conhecer novas, para me aperfeiçoar e estar pronto para
          futuras demandas. Tenho grande interesse em aprofundar meus
          conhecimentos em design patterns, boas práticas e metodologias de
          desenvolvimento, que possam me ajudar a crescer pessoal e
          profissionalmente. O que me deixa feliz em trabalhar na área de T.I. é
          poder participar do desenvolvimento de produtos e serviços que, de
          alguma forma, facilitem a vida das pessoas. Além disso, trabalhar
          nessa área faz como que eu esteja constantemente conhecendo pessoas,
          colaborando e principalmente aprendendo.
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
