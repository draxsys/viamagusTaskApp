import { StyleSheet, Platform, Dimensions } from 'react-native'
import Colors from '../../Constans/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen');
export const styles = StyleSheet.create({

    container: {
        marginHorizontal: 10,
       
    },
    gameText: {
        fontSize: scale(15),
        fontWeight: '600'
    },
    card: {
       
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 6,
    },
    bodyTopWrapper: {
        backgroundColor: Colors.purple,
        marginTop: verticalScale(10),
        position: 'relative',
        width: '100%'
    },
    textWhite: {
        color: Colors.white,
        textTransform: 'uppercase'
    },
    bitCoinIconStyle: {
        width: 100,
        height: 60,
        position: 'absolute',
        right:1,
        bottom:-7,
        
        // top: '15%',
        // left: 158
    },
    i: {
        width: moderateScale(17),
        height: moderateScale(17)
    },
    dollerIcon: {
        width: moderateScale(17),
        height: moderateScale(17)
    },
    underoverWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: moderateScale(10),
    },
    wrappersecond: {
        margin: moderateScale(10)
    },
    bitcointext1: {
        color: Colors.white,
        fontSize: scale(17),
        opacity: 0.7
    },
    bitcoinValue: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: scale(16)
    },
    bodymiddleWrapper: {
        backgroundColor: Colors.white,
        overflow: 'hidden'
    },
    headingWrapper: {
        flexDirection: 'row',
        // backgroundColor:'red',
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        margin: moderateScale(10)
    },
    headingTextDesign: {
        opacity: 0.4,
        fontSize: scale(13)
    },
    boxWrapper: {
        width: '23%',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 1
    },
    bodyTextDesign: {
        fontWeight: '600',
        fontSize: scale(13)
    },
    bodybottomWrapper: {
        justifyContent: 'space-between'
    },
    endWrapper: {
        backgroundColor: Colors.background,
        overflow: 'hidden',
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(10),
    },
    middleSecondWrapper: {
        margin: moderateScale(10)
    },
    whatPredictionText: {
        fontSize: scale(15),
        opacity: 0.6
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: 'red',
        width: '47%',
        padding: moderateScale(13),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: verticalScale(10),
        flexDirection: 'row'
    },
    btnText: {
        color: Colors.white,
        fontWeight: 'bold'
    },
    btnIconStyle: {
        width: moderateScale(13),
        height: moderateScale(13)
    },
    textStyle: {
        fontSize: scale(14),
        opacity: 0.7
    },
    progressWrapper: {
        marginTop: verticalScale(10),
        width: '100%'
    },
    predictionWrapper: {
        justifyContent: 'space-between',
        marginTop: verticalScale(10)
    },
    predText: {
        fontSize: scale(15),
        fontWeight: '400'
    },
    sheetWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 10
    },
    entryTickerStyle:{
        marginTop:verticalScale(10)
    },
    wonTextStyle:{
        opacity:0.8
    },
    moneyText:{
        color:Colors.green,
        fontWeight:'600'
    },
    moneyWrapperView:{
        justifyContent:'space-between'
    }
})