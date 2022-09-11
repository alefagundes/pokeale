import style from '../styles/Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ pokemon }) => {
  return (
    <div className={style.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={style.id}>#{pokemon.id}</p>
      <h3 className={style.title}>{pokemon.name}</h3>
      <Link href={`pokemon/${pokemon.id}`}>
        <a className={style.btn}>Detalhes</a>
      </Link>
    </div>
  )
}
export default Card
