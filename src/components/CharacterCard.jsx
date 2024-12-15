import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex w-[95%] md:w-[90%] lg:w-[85%] mx-auto hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="w-2/3 p-3 flex flex-col justify-center pl-4">
        <h2 className="text-lg md:text-2xl font-bold mb-1">{character.name}</h2>

        {/* Status */}
        <p className="text-sm md:text-base">
          <span className={`text-gray-400`}>
            {character.status === "Alive"
              ? "🟢"
              : character.status === "Dead"
              ? "🔴"
              : "⚪"}{" "}
            {character.status}
          </span>
          <span className="text-gray-300"> - {character.species}</span>
        </p>

        {/* Last known location */}
        <p className="text-sm mt-2">
          <span className="font-semibold text-gray-400">
            Last known location:
          </span>
          <br />
          <span className="text-gray-300 truncate">
            {character.location.name}
          </span>
        </p>

        {/* First seen in */}
        <p className="text-sm mt-2">
          <span className="font-semibold text-gray-400">First seen in:</span>
          <br />
          <span className="text-gray-300 truncate">
            {character.origin.name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
