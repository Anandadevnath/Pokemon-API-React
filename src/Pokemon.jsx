import axios from 'axios';
import { useEffect, useState } from "react";
import "./index.css";
// import { PokemonCards } from "./PokemonCards";

const pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const callAPI = async () => {
        try {
            const res = await axios.get(API);
            const data = res.data;
            // console.log(data);

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await axios.get(curPokemon.url);
                return res.data;
            });
            // console.log(detailedPokemonData);

            const detailedResponses = await axios.all(detailedPokemonData);
            console.log(detailedResponses);
            setPokemon(detailedResponses);
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        callAPI();
    }, []);

    return (
        <>
            <section className="container">
                <header>
                    <h1> Lets Catch Pokémon</h1>
                </header>
                <div>
                    <ul className="cards">
                        {pokemon.map((curPokemon) => {
                            return <li key={curPokemon.id}>{curPokemon.name}</li>
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default pokemon;