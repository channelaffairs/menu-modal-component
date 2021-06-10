import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppModal, CustomItemComponent, CustomTitleComponent } from './src/components';

import { menuItems } from './src/constants';



const App = () => {


  return (
    <SafeAreaProvider>
      {/* <AppModal options={menuItems} /> */}
      <AppModal
        options={menuItems}
        ListItemComponent={CustomItemComponent}
        ListSectionComponent={CustomTitleComponent}
        ListHeaderComponent={() => <View />}
        modalContainerStyle={styles.modalContainerStyle}
        listContainerStyle={styles.listContainerStyle} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    margin: 20,
  },
  listContainerStyle: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#eff0a8',
    padding: 10
  }
})



export default App;
