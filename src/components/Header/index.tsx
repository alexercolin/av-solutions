import styles from './styles.module.scss';

export default function Header() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <h1>
                        AV Solutions
                    </h1>
                </li>
            </ul>
        </nav>
    )
}