import axios from 'axios';
import { useEffect } from 'react';

const PokemonAPI = ({ setPokemon, setLoading, setError }) => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const callAPI = async () => {
        try {
            const res = await axios.get(API);
            const data = res.data;

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await axios.get(curPokemon.url);
                return res.data;
            });

            const detailedResponses = await axios.all(detailedPokemonData);
            console.log(detailedResponses);
            setPokemon(detailedResponses);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        callAPI();
    }, []);


    return null;
    

};

export default PokemonAPI;