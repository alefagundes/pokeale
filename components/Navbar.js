import style from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Image
          src="/images/pokeball.png"
          height="30px"
          width="30px"
          alt="pokeball"
        />
        <h1>
          Poke<span>Next</span>
        </h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
