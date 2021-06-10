import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { ListItemProps } from "react-native-elements";
import { TItem } from "../../typings";
import { styles } from "./styles";


export const CustomItemComponent = ({ item, ...props }: TProps) => {

    const onPress = useCallback(() => {
        const data = item?.subItems ? { title: item?.title, data: item?.subItems } : null
        return props.onItemPress(data)
    }, [item])

    return <View style={styles.container}>
        <Text>{item.title}</Text>
    </View>
}


type TData = { title: string, data: TItem[] } | null

type TProps = {
    item: TItem,
    onItemPress: (data: TData) => void
} & ListItemProps