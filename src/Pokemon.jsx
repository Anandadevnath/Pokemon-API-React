import axios from 'axios';
import React, { use } from 'react';
import { useEffect } from 'react';

const pokemon = () => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const callAPI = axios.get(API)
        .then((response) => {
            const data = response.data;
            const details = data.results.map((curpokemon) => {
                const res = axios.get(curpokemon.url)
            });
        })
        .catch((error) => {
            console.log(error);
        });

    useEffect(() => {
        callAPI;
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
        </div>
    );
};

export default pokemon;