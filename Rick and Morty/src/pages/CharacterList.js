import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

function CharacterList() {
  const { error, loading, data } = useCharacters();

  console.log("data:", data);
  if (loading) return <div>Loading....</div>;
  if (error) {
    return <div>something went wrong..</div>;
  }
  return (
    <div>
      <div className="search">
      <Link to="/search">
        <button className="location">Search for Locations</button>
      </Link>
      </div>
      <div className="image__layout">
        {data.characters.results.map((character) => {
          return (
            <Link to={`/${character.id}`} key={character.id}>
              <img src={character.image} alt="character" />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
