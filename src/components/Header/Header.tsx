import React from "react";
import { GestureResponderEvent } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "./styles";

type TProps = {
    onLeftButtonPress?: (event: GestureResponderEvent) => void
    placement?: "left" | "center" | "right"
    title: string
}


const CustomHeader = ({ placement = 'left', title, ...props }: TProps) => {
    const onLeftButtonPress = (event: GestureResponderEvent) => props?.onLeftButtonPress ? props?.onLeftButtonPress(event) : undefined

    return <Header
        placement={placement}
        containerStyle={styles.containerStyle}
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: onLeftButtonPress }}
        centerComponent={{ text: title, style: { color: '#fff' } }}
    // rightComponent={{ icon: 'home', color: '#fff' }}
    />

}

export default CustomHeader