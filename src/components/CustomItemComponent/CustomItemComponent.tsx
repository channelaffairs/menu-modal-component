import React, { useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TItem } from "../../Typings";
import AppText from "../AppText";
import { styles } from "./styles";


export const CustomItemComponent = ({ item, ...props }: TProps) => {
// You are not passing down onPress to any children, why would you use useCallBack?
    const onPress = useCallback(() => {
        const data = item?.subItems ? { title: item?.title, data: item?.subItems } : null
        item.onPress && item.onPress()
        return props.onItemPress(data)
    }, [item])

    const renberChildComponent = useCallback(() => item?.childComponent && item?.childComponent(), [item])

    return <Pressable style={styles.container} onPress={onPress}>
        <AppText leftIcon={item.icon} color='black' rightIcon={item.childComponent ? faChevronRight : undefined} wrapperStyle={styles.wrapperStyle}>
            <View style={styles.textContainer}>
                <Text>{item.title}</Text>
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
