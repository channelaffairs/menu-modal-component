import React, { useCallback } from "react";
import { When } from "react-if";
import { ListItem, Icon, Avatar, ListItemProps, IconProps, AvatarProps } from "react-native-elements";
import { TItem } from "../../Typings";
import { styles } from "./styles";


const CustomListItem = ({ item, ...props }: TProps) => {

    const onPress = useCallback(() => {
        const data = item?.subItems ? { title: item?.title, data: item?.subItems } : null
        return props.onPress && props.onPress(data as any)
    }, [item])

    return <ListItem containerStyle={styles.itemContainer} onPress={onPress} {...props.listProps}>
        <When condition={item.icon}>
            <Icon name={item.icon || ''} color='#909090' {...props.iconProps} />
        </When>
        <When condition={item.avatar}>
            <Avatar rounded title={item.avatar || ''} containerStyle={{ backgroundColor: '#a9c9b2' }} {...props.avatarProps} />
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
    onPress: (data: TData) => void
    iconProps?: Partial<IconProps>
    listProps?: Partial<ListItemProps>
    avatarProps?: Partial<AvatarProps>
}