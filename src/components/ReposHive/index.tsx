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
    <div>
      <ul className={styles.hexagonGallery}>
        {repos.length > 0 &&
          repos.map((repo, index) => (
            <li className={styles.hex} key={index}>
              <Link href={repo.html_url}>
                <a target="_blank">{repo.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
