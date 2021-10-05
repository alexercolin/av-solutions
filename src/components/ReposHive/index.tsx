import { useEffect, useState } from "react";
import { apiGithub } from "../../services/api";
import styles from "./styles.module.scss";
import Head from "next/head";

interface IOwner {
  login: string;
}

interface IRepo {
  name: string;
  html_url: string;
  owner: IOwner;
}

interface ProfileProps {
  userName: string;
}

export default function ReposHive({ userName }: ProfileProps) {
  const [repos, setRepos] = useState<IRepo[]>({} as IRepo[]);

  useEffect(() => {
    apiGithub
      .get(`/${userName}/repos`)
      .then((response) => {
        setRepos(response.data.slice(0, 10));
      })
      .catch(() => {
        setRepos({} as IRepo[]);
      });
  }, [userName]);

  return (
    <main className={styles.container}>
      <ul className={styles.hexagonGallery}>
        {repos.length > 0 &&
          repos.map((repo, index) => (
            <li
              className={styles.hex}
              key={index}
              onClick={() => window.open(repo.html_url)}
            >
              <span>{repo.name}</span>
            </li>
          ))}
      </ul>
    </main>
  );
}
