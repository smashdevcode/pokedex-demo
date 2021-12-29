function Card(params) {
  // destructured style
  const {name, num, img, type, next_evolution} = params.singlePokemon;

  function renderPokeData(dataType, data) {

    if (dataType === "type") {
      return data.map(dataPoint => (
        <li key={dataPoint}>{dataPoint}</li>
      ));
    } 
    else if (dataType === "evolutions" && data !== undefined) {
      return data.map(dataPoint => (
        <li key={dataPoint.num}><a href={"#" + dataPoint.num}>{dataPoint.num} - {dataPoint.name}</a></li>
      ))
      // Basilios' Solution:
      // return (
      //   <div>
      //     <h4>Evolutions:</h4>
      //     <ol>
      //       {data.map(dataPoint => (
      //         <li>{dataPoint.num} - {dataPoint.name}</li>
      //       ))}
      //     </ol>
      //   </div>
      // )
    }
  }

  return (
    <div className="pokemon-card" id={num}>
      <p>{num}</p>
      <h3>{name}</h3>
      <img src={img} alt={"Picture of " + name} />
      <h4>Types:</h4>
      <ul>
        {renderPokeData("type", type)}
      </ul>
      {next_evolution !== undefined ? <h4>Evolutions:</h4> : null}
      <ol>
        {renderPokeData("evolutions", next_evolution)}
      </ol>
    </div>
  );
}
  
export default Card;
  