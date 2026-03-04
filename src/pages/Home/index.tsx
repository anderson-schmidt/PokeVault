import React, { useState, useEffect } from 'react';
import 'react-native-reanimated';
import * as S from './styles';
import api from '../../service/api';
import { Card, Pokemon, PokemonType } from '../../components/Card';
import { ActivityIndicator, FlatList } from 'react-native';
import pokeHeader from '../../assets/pokeball.png';
import { useNavigation } from '@react-navigation/native';



type Request = {
    id: number;
    types: PokemonType[];
}

export function Home() {

    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);


    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    const { navigate } = useNavigation();

    function handleNavigation(pokemonId: number) {
        navigate('About', {
            pokemonId,
        });
    }

    async function getAllPokemon() {
        if (loading) return; // evita múltiplas chamadas simultâneas
        setLoading(true);

        try {
            const response = await api.get(`/pokemon?limit=20&offset=${offset}`);
            const { results } = response.data;

            const payloadPokemon = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url);
                    return { name: pokemon.name, id, types };
                })
            );

            // adiciona os novos Pokémon à lista existente
            setPokemon(prev => [...prev, ...payloadPokemon]);
            setOffset(prev => prev + 20); // avança o offset
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

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
                    <S.Header source={pokeHeader} />
                    <S.Title>Pokédex</S.Title>
                </>
            }
            contentContainerStyle={{ paddingBottom: 20 }}
            data={pokemon}
            keyExtractor={pokemon => String(pokemon.id)}
            renderItem={({ item: pokemon }) => (
                <Card
                    data={pokemon}
                    onPress={() => handleNavigation(pokemon.id)}
                />
            )}
            onEndReached={getAllPokemon}          // chama quando chega ao fim
            onEndReachedThreshold={0.1}           // 10% antes do fim
            ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
        />
    </S.Container>
}