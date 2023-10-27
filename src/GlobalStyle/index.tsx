import { StyleSheet, Platform, Dimensions } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen');
export const GlobalStyle = StyleSheet.create({
    flexrow:{
        flexDirection:'row',
    }
    
})