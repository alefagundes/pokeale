import styles from '../../styles/PokemonId.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const apiURL = 'https://pokeapi.co/api/v2/pokemon/'
  const maxPokemons = 250
  const req = await fetch(`${apiURL}?limit=${maxPokemons}`)
  const pokemons = await req.json()
  //params
  const paths = pokemons.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId
  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await req.json()
  return {
    props: { pokemon: data },
  }
}

const PokemonId = ({ pokemon }) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <>
        <p className={styles.carregando}>Carregando...</p>
      </>
    )
  }
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="250"
        height="250"
        alt={pokemon.name}
      />
      <div>
        <h3>Número</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
              key={index}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonId
