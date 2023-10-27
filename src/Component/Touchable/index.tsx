import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../../Constans/Colors';

export interface TouchableProps {
    name?: any;
    onPress: any;
    style:any,
    src:any
}

const Touchbale: React.FC<TouchableProps> = ({ name, onPress ,style,src}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.buttonStyle,style]}>
            {src&&<Image source={src} style={styles.btnIconStyle} />}
            <Text style={styles.btnText}> {name}</Text>
        </TouchableOpacity>
    );
};

export default Touchbale;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'red',
        padding: moderateScale(13),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: verticalScale(10),
        flexDirection: 'row'
    },
    btnIconStyle: {
        width: moderateScale(13),
        height: moderateScale(13)
    },
    btnText: {
        color: Colors.white,
        fontWeight: 'bold'
    },
});