import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header} >
      <ul className={styles.menu}>
        <li><Link className={styles.linkmenu} to="./">PÁGINA INICIAL</Link></li>
        <li><Link className={styles.linkmenu} to="./Missao">MISSÃO</Link></li>
        <li><Link className={styles.linkmenu} to="./Produto">PRODUTOS</Link></li>
        <li><Link className={styles.linkmenu} to="./Historia">NOSSA HISTORIA</Link></li>
        <li><Link className={styles.linkmenu} to="./Contato">CONTATO</Link></li>
        <li><Link className={styles.linkmenu} ><img className={styles.carrinho} src="https://tse2.mm.bing.net/th?id=OIP.Sh5fvCtBn6bA8MU12QEU4QHaHa&pid=Api&P=0&h=180" alt="" width='30px' /></Link></li>

      </ul>


    </header>
  )
}
