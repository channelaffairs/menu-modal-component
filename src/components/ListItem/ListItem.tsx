import React, { useCallback } from "react";
import { When } from "react-if";
import { ListItem, Icon, Avatar, ListItemProps } from "react-native-elements";
import { TItem } from "../../typings";
import { styles } from "./styles";


const CustomListItem = ({ item, ...props }: TProps) => {

    const onPress = useCallback(() => {
        const data = item?.subItems ? { title: item?.title, data: item?.subItems } : null
        return props.onItemPress(data)
    }, [item])

    return <ListItem containerStyle={styles.itemContainer} onPress={onPress} {...props}>
        <When condition={item.icon}>
            <Icon name={'av-timer'} color='#909090' />
        </When>
        <When condition={item.avatar}>
            <Avatar rounded title="MD" containerStyle={{ backgroundColor: '#a9c9b2' }} />
        </When>
        <ListItem.Content>
            <ListItem.Title style={styles.itemTitle}>{item.title}</ListItem.Title>
            <When condition={item.subTitle}>
                <ListItem.Subtitle style={styles.itemTitle}>{item.subTitle}</ListItem.Subtitle>
            </When>
        </ListItem.Content>
        <When condition={!!item?.subItems}>
            <ListItem.Chevron onPress={onPress} />
        </When>
    </ListItem>
}
export default CustomListItem


type TData = { title: string, data: TItem[] } | null

type TProps = {
    item: TItem,
    onItemPress: (data: TData) => void
} & ListItemProps