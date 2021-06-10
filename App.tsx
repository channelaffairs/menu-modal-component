

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppModal } from './src/components';
import { menuItems } from './src/constants';



const App = () => {


  return (
    <SafeAreaProvider>
      <AppModal options={menuItems} />
    </SafeAreaProvider>
  );
};



export default App;
