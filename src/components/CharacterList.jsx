import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="paginacion">
      {page === 1 ? (
          <button className="btn-page" disabled>Previous</button>
          ) : (
            <button onClick={() => setPage(page - 1)} className="btn-page">Previous</button>
        )
      }
      <div className="listpag">

          <div className="pactual">
             <h3>pag.{page}</h3> 
          </div>
          <button className="btnnum" onClick={() => setPage(page + 1)}>{page + 1}</button>
          <button className="btnnum" onClick={() => setPage(page + 2)}>{page + 2}</button>
          <button className="btnnum" onClick={() => setPage(page + 3)}>{page + 3}</button>
          <button className="btnnum" onClick={() => setPage(page + 4)}>{page + 4}</button>
          <button className="btnnum" onClick={() => setPage(page + 5)}>{page + 5}</button>
          <button className="btnnum" onClick={() => setPage(page + 6)}>{page + 6}</button>
          <button className="btnnum" onClick={() => setPage(page + 7)}>{page + 7}</button>
      </div>
      
      <button onClick={() => setPage(page + 1)} className="btn-page">Next</button>
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="characters">
          {characters.map((character) => (
            <div className="card" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
