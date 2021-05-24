import './Pokecard.css'
/** 
 * Accepts object with name, id, type, and base_experience 
 * Returns div element of Pokecard including name, image, type and experience
*/

// make a base URL for img
function Pokecard(props) {
  const { name, id, type, base_experience } = props;
  return (
    <div className="card Pokecard col-4">
    <img className="card-img-top Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title Pokecard-name">{name}</h5>
      <p className="card-text Pokecard-type">Type: {type}</p>
      <p className="card-text Pokecard-exp">Exp: {base_experience}</p>
    </div>
  </div>
  )
}

export default Pokecard;