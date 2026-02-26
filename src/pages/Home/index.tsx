import React, { useState, useEffect } from 'react';
import 'react-native-reanimated';
import * as S from './styles';
import api from '../../service/api';
import { Card, Pokemon, PokemonType } from '../../components/Card';
import { FlatList } from 'react-native';
import pokeHeader from '../../assets/pokeball.png';
import { useNavigation } from '@react-navigation/native';


type Request = {
    id: number;
    types: PokemonType[];
}

export function Home() {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    const{navigate} = useNavigation();

    function handleNavigation(pokemonId: number) {
        navigate('About', { 
            pokemonId,
         });
    }

    useEffect(() => {
        async function getAllPokemon() {
            const response = await api.get('/pokemon')
            const { results } = response.data;

            const payloadPokemon = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url);

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                }
                )
            )
            setPokemon(payloadPokemon);

        }
        getAllPokemon();
    }, [])

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url);
        const { id, types } = response.data;

        return { id, types };
    }

    return <S.Container>
        <FlatList
            ListHeaderComponent={
                <>
                <S.Header source={pokeHeader}>

                </S.Header>

                <S.Title>Pokédex</S.Title>
                </>
            }

            contentContainerStyle={{ paddingBottom: 20 }}

            data={pokemon}
            keyExtractor={pokemon => pokemon.name}
            renderItem={({ item: pokemon }) => (
                <Card data={pokemon} onPress={() =>{
                    handleNavigation(pokemon.id)
                }}/>
            )}

        />
    </S.Container>
}