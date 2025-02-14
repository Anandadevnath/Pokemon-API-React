import { useEffect, useState } from "react";
import '../index.css';
import PokemonCards from './PokemonCards.jsx';
import PokemonAPI from './PokemonAPI.jsx';


const pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const searchData = pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <PokemonAPI setPokemon={setPokemon} setLoading={setLoading} setError={setError} />
            <section className="container">
                <header>
                    {loading ? (
                        <div className="pokeball-spinner">
                            <div className="pokeball"></div>
                        </div>
                    ) : error ? (
                        <h1>{error.message}</h1>
                    ) : (
                        <h1>Pokémon</h1>
                    )}
                </header>
                <div className="pokemon-search">
                    <input
                        type="text"
                        placeholder="search Pokemon"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    <ul className="cards">
                        {searchData.map((curPokemon) => {
                            return (
                                <PokemonCards
                                    key={curPokemon.id}
                                    pokemonData={curPokemon}
                                />
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default pokemon;