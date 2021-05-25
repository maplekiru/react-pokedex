import Pokedex from './Pokedex'

function Pokegame(props) {
  console.log("props", props);
  let max = props.pokemons.length;
  let pokeArray = [...props.pokemons];
  let player1 = [];
  let player2 = [];
  while (max > 0) {
    let randomIndex = Math.floor(Math.random() * (max));

    if (max % 2 === 0) {
      console.log("randomIndex", randomIndex, "player1", player1)
      player1.push(pokeArray[randomIndex]);
    } else {
      console.log("randomIndex", randomIndex, "player2", player2)
      player2.push(pokeArray[randomIndex]);
    }
    pokeArray.splice(randomIndex, 1);
    max -= 1;
  }
  console.log("player1, player2", player1, player2);
  return (<div className="Pokegame">
    <div className="Pokegame-player">
      <pre>{JSON.stringify(player1, null, 2)}</pre>
      <Pokedex pokemons={player1} />
    </div>
    <div className="Pokegame-player">
      <Pokedex pokemons={player2} />
    </div>
  </div >)
}

Pokegame.defaultProps = {
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

export default Pokegame