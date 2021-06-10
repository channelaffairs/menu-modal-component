import React, { JSXElementConstructor, ReactElement, useCallback, useMemo, useState } from "react";
import { SectionList, SectionListRenderItem, StyleProp, View, ViewStyle } from "react-native";
import { Avatar, ListItemProps } from "react-native-elements";
import Modal from 'react-native-modal';
import { TItem, TOptions } from "../../typings";
import Header from "../Header";
import ListItem from "../ListItem";
import { styles } from "./styles";


export const AppModal = ({ options, ListItemComponent, ListSectionComponent, ListHeaderComponent, ...props }: TProps) => {
    const [subItems, setSubItems] = useState<TOptions | null>(null)

    //Styling
    const modalContainerStyle = useMemo(() => [styles.modalContainer, props.modalContainerStyle], [props.modalContainerStyle])
    const listContainerStyle = useMemo(() => [styles.listContainer, props.listContainerStyle], [props.listContainerStyle])

    const onHeaderBackButtonPress = () => setSubItems(null)
    const onItemPress = () => { }


    const keyExtractor = useCallback((item, index) => item + index, [])

    const renderItem = useCallback(({ item }: { item: TItem }) => {
        const onPress = (data: TOptions | null) => item?.subItems ? setSubItems(data) : onItemPress()
        return ListItemComponent ? <ListItemComponent item={item} /> : <ListItem item={item} onItemPress={onPress} {...props} />
    }, [props])

    const renderSectionHeader = useCallback(({ section: { title } }: { section: { title: string } }) => {
        return ListSectionComponent ? <ListSectionComponent title={title} /> : <View style={styles.lineSeparator} />
    }, [ListSectionComponent])

    const renderHeaderComponent = useCallback(() => {
        if (subItems) return <Header onLeftButtonPress={onHeaderBackButtonPress} title={subItems.title} />
        return ListHeaderComponent ? <ListHeaderComponent /> : <View style={styles.headerContainer}>
            {<Avatar rounded title="MD" size={'medium'} containerStyle={{ backgroundColor: '#a9c9b2' }} />}
        </View>
    }, [ListHeaderComponent])

    return <Modal
        isVisible={true}
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
    options: TOptions[],
    modalContainerStyle?: StyleProp<ViewStyle>
    listContainerStyle?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    ListItemComponent?: (item: any) => JSX.Element
    ListSectionComponent?: (props: any) => JSX.Element
    ListHeaderComponent?: (props: any) => JSX.Element
    // ItemComponent: typeof React.Component
    // pad?: number;
    // Component?: typeof React.Component;
    //  ViewComponent?: typeof React.Component;
    // linearGradientProps?: any;
    // children?: any;
}
// & ListItemProps