import Pokecard from './Pokecard';

/** 
 * Accepts array of pokemon data as objects at props key 'pokemons' 
 * {pokemons: [{id, name, type, base_experience},...]}
 * Returns array of Pokecard JSX elements
 */
function Pokedex(props) {
  console.log("Pokedex Props", props)
  return props.pokemons.map(pokemon => <Pokecard name={pokemon.name} id={pokemon.id}
    type={pokemon.type} base_experience={pokemon.base_experience} />)
}

Pokedex.defaultProps = {
  pokemons: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
};

export default Pokedex;