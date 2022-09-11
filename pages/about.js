import style from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={style.about}>
      <h1>
        Sobre o Poké<span>Next</span>
      </h1>
      <p>
        Projeto desenvolvido com <span>Next.JS</span> utilizando a{' '}
        <a href="https://pokeapi.co/">PokéAPI</a> e hospedado na Vercel com o
        objetivo de demostrar e treinar meus conhecimentos com esse excelente
        framework!
      </p>
      <Image
        src="/images/charizard.png"
        height="320px"
        width="320px"
        alt="charizard"
      />
    </div>
  )
}

export default About
