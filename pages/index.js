import style from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card'

export const getStaticProps = async () => {
  const apiURL = 'https://pokeapi.co/api/v2/pokemon/'
  const maxPokemons = 250
  const req = await fetch(`${apiURL}?limit=${maxPokemons}`)
  const pokemons = await req.json()

  // add pokemon index
  pokemons.results.forEach((item, index) => {
    item.id = index + 1
  })
  return {
    props: {
      pokemons: pokemons.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      {!pokemons && <p>Carregando...</p>}
      <div className={style.title_container}>
        <h1 className={style.title}>
          Poké<span>dex</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokenext"
        />
      </div>
      <div className={style.pokemon_container}>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  )
}
