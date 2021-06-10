import React, { useCallback } from "react";
import { When } from "react-if";
import { SectionList, View } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import Modal from 'react-native-modal';
import { styles } from "./styles";

type TProps = {
    options: any[]
}

export const AppModal = ({ options }: TProps) => {
    const keyExtractor = useCallback((item: any, index: any) => item + index, [])

    const renderItem = ({ item }: any) => {
        return <ListItem containerStyle={styles.itemContainer}>
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
            <When condition={item.subItems}>
                <ListItem.Chevron />
            </When>
        </ListItem>
    }

    const renderSectionHeader = () => {
        return <View style={styles.lineSeparator} />
    }
    const renderHeaderComponent = () => {
        return <View style={styles.headerContainer}>
            {<Avatar rounded title="MD" size={'medium'} containerStyle={{ backgroundColor: '#a9c9b2' }} />}
        </View>
    }

    return <Modal
        isVisible={true}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={styles.modalContainer}
    >
        <SectionList
            sections={options}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.container}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListHeaderComponent={renderHeaderComponent}
        />

    </Modal>
}