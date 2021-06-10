import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { ListItemProps } from "react-native-elements";
import { TItem } from "../../typings";
import { styles } from "./styles";


type TProps = {
    title: string
}

export const CustomTitleComponent = ({ title }: TProps) => {
    return <Text style={styles.title}>{title}</Text>
}