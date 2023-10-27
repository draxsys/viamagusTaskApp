import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export interface BodyWarperProps {
  edges?: any;
  children: React.ReactNode;
}

const BodyWarpper: React.FC<BodyWarperProps> = ({ edges, children }) => {
  return (
    <SafeAreaView style={styles.container} edges={edges ?? ['top']}>
      <StatusBar
        animated={true}
        backgroundColor={'#fefefe'}
        barStyle='light-content'
      />
      {children}
    </SafeAreaView>
  );
};

export default BodyWarpper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});