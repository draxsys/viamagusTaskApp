import React, { Component, useState, version } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale } from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BodyWarpper from '../../Component/BodyWarpper';
import Colors from '../../Constans/Colors';
import { GlobalStyle } from '../../GlobalStyle';
import Badges from './Badges';
import { verticalScale } from 'react-native-size-matters';
import Header from '../../Component/Header';
import GamesPlayed from './GamesPlayed';
const UserProfile = () => {
    const [tabSelect, setTabSelect] = useState(true)


    return (
        <BodyWarpper>
            <Header />
            <ScrollView style={{ flex: 1 }}>
                <View>

                    <View style={styles.headerContent}>
                        <Image
                            style={styles.avatar}
                            source={require('../../Assets/avatarhi.png')}
                        />
                        <View style={styles.editicon}>
                            <FontAwesome5 name="edit" size={scale(14)} color="#727682" />
                        </View>


                        <Text style={styles.name}>John Doe </Text>
                        <Text style={styles.userInfo}>6000 Pts</Text>
                        <Text style={styles.userdescription}>Im a software developer that has been in the crypto space since 2012.
                            And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
                        <View style={styles.logouticon}>
                            <MaterialCommunityIcons name="logout" size={24} color="#727682" />
                            <Text style={styles.logouttext}>Logout</Text>
                        </View>
                    </View>

                    <View style={styles.footercontent}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '50%', top: '-25%' }}>
                            <Image
                                style={styles.grouppng}
                                source={require('../../Assets/group.png')}
                                resizeMode='contain'
                            />
                        </View>

                        <View style={styles.footerinner}>


                            <View style={styles.innerleftcontent}>
                                <Text style={styles.underover}>Under or Over</Text>
                                <View style={styles.iconandtext}>
                                    <Image
                                        style={styles.downavetor}
                                        source={require('../../Assets/greenpng.png')}
                                    />
                                    <Text style={styles.percentage}>81%</Text>
                                </View>
                            </View>
                            <View style={styles.innerleftcontent}>
                                <Text style={styles.underover}>Top 5</Text>
                                <View style={styles.iconandtext}>
                                    <Image
                                        style={styles.downavetor}
                                        source={require('../../Assets/redpng.png')}
                                    />
                                    <Text style={styles.percentage}>-51%</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                </View>

                <View style={[GlobalStyle.flexrow, styles.tabView]}>
                    <TouchableOpacity onPress={() => setTabSelect(true)} style={[styles.tabButton, {
                        borderBottomWidth: tabSelect ? 2 : 0,
                        borderBottomColor: Colors.purple
                    }]} activeOpacity={0.8}>
                        <Text style={[styles.tabText, { color: tabSelect ? Colors.purple : Colors.black }]}>GAMES PLAYED</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabSelect(false)} style={[styles.tabButton, {
                        borderBottomWidth: tabSelect ? 0 : 2,
                        borderBottomColor: Colors.purple
                    }]} activeOpacity={0.8}>
                        <Text style={[styles.tabText, { color: !tabSelect ? Colors.purple : Colors.black }]}>BADGES</Text>

                    </TouchableOpacity>
                </View>
                {tabSelect ?
                    <GamesPlayed /> : <Badges />}
            </ScrollView>


        </BodyWarpper>
    );
}
export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabText: {
        fontWeight: '600',
    },
    tabButton: {
        width: '50%',
        padding: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabView: {

    },
    headerContent: {
        padding: moderateScale(10),
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: '#000000',
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: '#778899',
        fontWeight: '600',
        marginTop: 5
    },
    body: {
        backgroundColor: '#778899',
        height: 500,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5,
    },
    iconContent: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 20,
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: '#FFFFFF',
    },
    userdescription: {
        marginTop: 15,
        fontSize: 16,
    },
    logouticon: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',

    },
    logouttext: {
        fontSize: 17,
        marginLeft: moderateScale(7),
        opacity: 0.6
    },
    footercontent: {
        marginHorizontal: moderateScale(10),
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        borderColor: '#EEEAF3',
        padding: moderateScale(17),
        marginTop: moderateScale(20),
    },
    footerinner: {
        flexDirection: 'row',

    },
    downavetor: {
        height: moderateScale(42),
        width: moderateScale(42)
    },
    innerleftcontent: {
        width: '50%',
        alignItems: 'flex-start',
    },
    underover: {
        fontWeight: '700',
        fontSize: 17,
        marginBottom: 17
    },
    iconandtext: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        alignSelf: 'center'
    },
    percentage: {
        fontSize: scale(23),
        fontWeight: 'bold',
        color: Colors.dark,
        marginLeft: moderateScale(10),
        marginTop: verticalScale(5)

    },
    grouppng: {
        height: moderateScale(34),
        width: moderateScale(34)
    },
    editicon: {
        backgroundColor: '#ffff',
        width: moderateScale(35),
        height: moderateScale(35),
        borderRadius: moderateScale(60),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#EEEAF3',
        position: 'absolute',
        top: 100,
        right: 130
    }


});


