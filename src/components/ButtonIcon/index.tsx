import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { theme } from "../../global/styles/theme";
import { Styles } from './styles'

type Props = TouchableOpacityProps & {
    title: String;
}
export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={Styles.container} {...rest}>
            <View style={Styles.iconWrapper}>
                <Image source={DiscordImg} style={Styles.icon} />
            </View>

            <Text style={Styles.title}> {title} </Text>
        </TouchableOpacity>
    )
}