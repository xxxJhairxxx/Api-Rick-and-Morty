 export function Character(character){
    return(
        <div className="card-character">
            
            <img src={character.image} alt="" className="card-img" />
            <h3 className="name">{character.name}</h3>
            <p className="origin">{`Origin:${character.origin && character.origin.name}`}</p>
        </div>
    )

 }