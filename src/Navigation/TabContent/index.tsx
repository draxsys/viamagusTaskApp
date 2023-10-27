import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainTabNavigation from '../MainTabNavigation';

const TabContent = () => {
  return (
    <View style={styles.wrapper}>
      <MainTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default TabContent;
