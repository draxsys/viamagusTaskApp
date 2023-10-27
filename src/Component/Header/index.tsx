import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <View style={[styles.headerBox,{alignItems:'flex-start'}]}>
                <Image
                    style={styles.iconStyle}
                    source={require('../../Assets/icon.png')}
                />
            </View>
            <View style={[styles.headerBox,{justifyContent:'center',alignItems:'center'}]}>
                <Text>Profile</Text>

            </View>
            <View style={[styles.headerBox,{alignItems:'flex-end'}]}>
                <Image
                    style={styles.iconStyle}
                    source={require('../../Assets/messgae.png')}
                    resizeMode='stretch'
                />
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal:moderateScale(10),
        // padding:10
    },
    headerBox:{
        width:'33.33%'
    },
    iconStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
    }
})