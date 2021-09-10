
import styles from './styles.module.scss';

export default function MainContainer() {
    return (
        <div>
            <div className={styles.container}>
                <h2>Sobre</h2>
                <p>AV Solutions é uma empresa que foi fundada em 2021 por dois amigos desenvolvedores Alex Ercolin & Vitor Brandão, com o objetivo de criar soluções digitais para empresas de diversos ramos.</p>
                <p>Oferecemos soluções inovadoras utilizando o que há de melhor e mais atual no mundo da programação. Realizando serviços tanto no front-end, quanto no back-end das aplicações.</p>
            </div>
            <div className={styles.container}>
                <h2>Equipe</h2>
                <p>AV Solutions é uma empresa que foi fundada em 2021 por dois amigos desenvolvedores Alex Ercolin & Vitor Brandão, com o objetivo de criar soluções digitais para empresas de diversos ramos.</p>
                <p>Oferecemos soluções inovadoras utilizando o que há de melhor e mais atual no mundo da programação. Realizando serviços tanto no front-end, quanto no back-end das aplicações.</p>
            </div>
        </div>
    );
}

