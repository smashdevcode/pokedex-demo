function Card({name, num, img, type, nextEvolution}) {
  console.log("This is inside the Card component", {name, num, img, type, nextEvolution});

    return (
      <div className="pokemon-card">
        <p>{num}</p>
        <h3>{name}</h3>
        <img src={img} alt={"Picture of " + name} />
        <ul></ul>
        <ol></ol>
      </div>
    );
  }
  
  export default Card;
  