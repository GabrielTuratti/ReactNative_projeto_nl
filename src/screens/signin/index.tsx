import React, { useState } from "react";
import { View, Text, Image, StatusBar } from 'react-native';
import { Styles } from './styles';

import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon";

export default function Index() {
    return <View style={Styles.container}>
        <StatusBar
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
        />
        <Image
            source={IlustrationImg}
            style={Styles.image}
            resizeMode="stretch"
        />

        <View style={Styles.content}>
            <Text style={Styles.title}>
                Organize {`\n`}
                suas jogatinas {`\n`}
                facilmente
            </Text>

            <Text style={Styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
            </Text>

            <ButtonIcon
                title="Entrar Com Discord"
                activeOpacity={0.7}
            />

        </View>
    </View>

}