import React, { useCallback, useMemo, useState } from "react";
import { SectionList, StyleProp, View, ViewStyle } from "react-native";
import { Avatar, AvatarProps, IconProps, ListItemProps } from "react-native-elements";
import Modal from 'react-native-modal';
import { TItem, TSectionListOptions, TSimpleListOptios } from "../../Typings";
import Header from "../Header";
import ListItem from "../ListItem";
import { styles } from "./styles";
import { formateCorrectData } from "./utils";


export const AppModal = ({ ListItemComponent, ListSectionComponent, ListHeaderComponent, isVisible, ...props }: TProps) => {
    const [subItems, setSubItems] = useState<TSectionListOptions | null>(null)
    const options = useMemo(() => formateCorrectData(props.options), [props.options])

    //Styling
    const modalContainerStyle = useMemo(() => [styles.modalContainer, props.modalContainerStyle], [props.modalContainerStyle])
    const listContainerStyle = useMemo(() => [styles.listContainer, props.listContainerStyle], [props.listContainerStyle])

    const onHeaderBackButtonPress = () => setSubItems(null)


    const keyExtractor = useCallback((item, index) => item + index, [])

    const renderItem = useCallback(({ item }: { item: TItem }) => {
        const onPress: any = (data: TSectionListOptions | null) => item?.subItems ? setSubItems(data) : props.onItemPress(item)
        return ListItemComponent ? <ListItemComponent item={item} onItemPress={onPress} /> : <ListItem item={item} onPress={onPress}  {...props} />
    }, [props])

    const renderSectionHeader = useCallback(({ section: { title } }: { section: { title: string } }) => {
        if (!title) return null
        return ListSectionComponent ? <ListSectionComponent title={title} /> : <View style={styles.lineSeparator} />
    }, [ListSectionComponent])

    const renderHeaderComponent = useCallback(() => {
        if (subItems) return <Header onLeftButtonPress={onHeaderBackButtonPress} title={subItems.title} />
        return ListHeaderComponent ? <ListHeaderComponent /> : <View style={styles.headerContainer}>
            {<Avatar rounded title="MD" size={'medium'} containerStyle={{ backgroundColor: '#a9c9b2' }} {...props.avatarProps} />}
        </View>
    }, [ListHeaderComponent, subItems])

    return <Modal
        isVisible={isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={modalContainerStyle}
    >
        <SectionList
            sections={subItems ? [subItems] : options}
            keyExtractor={keyExtractor}
            contentContainerStyle={listContainerStyle}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListHeaderComponent={renderHeaderComponent}
        />

    </Modal>
}


type TProps = {
    isVisible: boolean
    options: TSectionListOptions[] | TSimpleListOptios[],
    onItemPress: (item: TItem) => void,
    modalContainerStyle?: StyleProp<ViewStyle>
    listContainerStyle?: StyleProp<ViewStyle>
    ListItemComponent?: (item: any) => JSX.Element
    ListSectionComponent?: (props: any) => JSX.Element
    ListHeaderComponent?: (props: any) => JSX.Element
    iconProps?: Partial<IconProps>,
    listProps?: Partial<ListItemProps>
    avatarProps?: Partial<AvatarProps>
}