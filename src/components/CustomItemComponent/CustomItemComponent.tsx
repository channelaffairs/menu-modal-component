import React, { useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TItem } from "../../Typings";
import AppText from "../AppText";
import { styles } from "./styles";





export const CustomItemComponent = ({ item, ...props }: TProps) => {

    const onPress = useCallback(() => {
        const data = item?.subItems ? { title: item?.title, data: item?.subItems } : null
        item.onPress && item.onPress()
        return props.onItemPress(data)
    }, [item])

    const renberChildComponent = useCallback(() => item?.childComponent && item?.childComponent(), [item])
// Pressable is not needed with AppText - check component
    return <Pressable style={styles.container} onPress={onPress}>
        <AppText leftIcon={item.icon} color='black' rightIcon={item.childComponent ? faChevronRight : undefined} wrapperStyle={styles.wrapperStyle}>
            // Why would a View be a child of AppText?
            <View style={styles.textContainer}>
                // How is the user able to go back to the main menu?
                <Text>{item.title}</Text>
                // How would I pass props to the childComponent when rendered?
                {renberChildComponent()}
            </View>
        </AppText>
    </Pressable>
}


type TData = { title: string, data: TItem[] } | null

type TProps = {
    item: any,
    onItemPress: (data: TData) => void,
}
