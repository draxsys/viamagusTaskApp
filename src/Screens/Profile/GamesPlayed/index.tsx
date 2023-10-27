import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';



type UserGamesPlayedViewProps = {};

const GamesPlayed: React.FC<UserGamesPlayedViewProps> = () => {
  return (
    <View style={styles.container}>
     
<Text>Demo here</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  

  
});

export default GamesPlayed;
