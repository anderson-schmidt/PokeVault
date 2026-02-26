import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokeAnimation from './pokeball.json';
import * as S from './styles';
import { Button } from '../../components/Button';

import {useNavigation} from '@react-navigation/native';

export function Welcome() {
    const {navigate} = useNavigation();
    function handleNavigation() {
        navigate('Home');    
    };

    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
            <AnimatedLottieView autoPlay source={pokeAnimation} loop style={{ width: 300, height: 300 }} />
            </S.WrapperAnimation>
            <S.Title>PokeVault</S.Title>
            <S.Subtitle>O melhor lugar para consultar pokémons</S.Subtitle>
        </S.Content>
        <S.Footer>
            <Button title='Iniciar' onPress={handleNavigation}/>
        </S.Footer>
    </S.Container>
}