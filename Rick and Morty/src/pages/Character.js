import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
export default function Character() {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (error) return <div>something went wrong ${error}</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="character">
      <div>
        <img
          src={data.character.image}
          height={500}
          width={500}
          alt="Character"
        />
      </div>
      <div>
        <h1>{data.character.name}</h1>
        {data.character.episode.map((episode) => {
          return (
            <div key={episode.episode}>
              <p>Episode name: {episode.name}</p>
              <p>Episode number: {episode.episode}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
