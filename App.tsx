import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppModal, CustomItemComponent, CustomTitleComponent } from './src/Components';
import LinearGradient from 'react-native-linear-gradient';

import { menuItems } from './src/Constants';
import { menuData } from './src/Constants/menu-data';



const App = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(!isModalVisible)
  const doSomethingOnItemPress = (item: any) => {
    // You can do whatever you want with this data (navigate,put to server ets)
    console.log(item)
    toggleModal()
  }


  return (
    <SafeAreaProvider style={styles.container}>
      {/* ===U can use it like a separate component=== */}
    // Why would I pass the options to the Modal component ? The Modal could display also just a picture or else
      <AppModal options={menuItems} onItemPress={doSomethingOnItemPress} isVisible={isModalVisible} />




      {/* ===Or customize component, what exist in this component=== */}

      {/* <AppModal
        options={menuItems}
        onItemPress={doSomethingOnItemPress}
        isVisible={isModalVisible}
        iconProps={{ size: 35 }}
        listProps={{
          bottomDivider: false,
          ViewComponent: LinearGradient,
          linearGradientProps: {
            colors: ['#FF9800', '#F44336'],
            start: { x: 1, y: 0 },
            end: { x: 0.2, y: 0 },
          }
        }}
        avatarProps={{ containerStyle: { backgroundColor: 'red' } }} /> */}


      {/* ===Or push your own components to build it=== */}

      {/* <AppModal
        isVisible={isModalVisible}
        onItemPress={doSomethingOnItemPress}
        options={menuData}
        ListItemComponent={CustomItemComponent}
        ListSectionComponent={CustomTitleComponent}
        ListHeaderComponent={() => <View />}
        modalContainerStyle={styles.modalContainerStyle}
        listContainerStyle={styles.listContainerStyle} /> */}

      <Pressable style={styles.button} onPress={toggleModal}>
        <Text>Open Menu</Text>
      </Pressable>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16
  },
  modalContainerStyle: {
    margin: 20,
  },
  listContainerStyle: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#eff0a8',
    padding: 10
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

})



export default App;
