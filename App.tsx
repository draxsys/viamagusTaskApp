import React, {useEffect, useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import RootNavigation from './src/Navigation/RootNavigation';

const App = () => {
 

  return (

        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
       
  );
};

const styles = StyleSheet.create({
  
});
export default App;
