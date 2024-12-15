import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../api";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters(search);
      setCharacters(data);
    };
    loadCharacters();
  }, [search]);

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Header */}
      <h1 className="text-white text-3xl text-center py-6 font-bold">
        Rick and Morty Characters
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Characters"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Character Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-8">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;