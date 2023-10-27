import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    ImageBackground,
    Image,
    StatusBar,
    View,
    Platform,
    PermissionsAndroid,
    Text,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import BodyWarpper from '../../Component/BodyWarpper';
import { styles } from './styles';
import Touchable from '../../Component/Touchable';
import { GlobalStyle } from '../../GlobalStyle';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constans/Colors';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop,
    BottomSheetFlatList
} from '@gorhom/bottom-sheet';

// import ScrollPicker from '../../Component/PickerComponent';

const Home = (props: any) => {
    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['1%', '60%'], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BodyWarpper>
            <BottomSheetModalProvider>

                <View style={styles.container}>
                    <Text style={styles.gameText}>Today's Game</Text>

                    {/* ---Card view start--- */}
                    <View style={styles.card}>
                        <View style={styles.bodyTopWrapper}>
                            <Image source={require('../../Assets/bitcoin.png')} style={styles.bitCoinIconStyle} resizeMode='contain' />
                            <View style={styles.wrapperone}>
                                <View style={styles.underoverWrapper}>
                                    <Text style={styles.textWhite}>Under or Over  </Text>
                                    <Image source={require('../../Assets/i.png')} style={styles.i} />
                                </View>
                                <View style={styles.underoverWrapper}>
                                    <Text style={styles.textWhite}>starting in  </Text>
                                    <Image source={require('../../Assets/cl.png')} style={{ ...styles.i, tintColor: '#fff' }} />
                                    <Text style={styles.textWhite}>   03:23:12</Text>
                                </View>
                            </View>

                            <View style={styles.wrappersecond}>
                                <Text style={styles.bitcointext1}>Bitcoin price will be under</Text>
                                <Text style={styles.bitcoinValue}>$24,524 at 7 a ET on 22nd Jan’21</Text>
                            </View>
                        </View>
                        <View style={styles.bodymiddleWrapper}>
                            <View style={styles.headingWrapper}>
                                <View style={styles.boxWrapper}>
                                    <Text style={styles.headingTextDesign}>POOL PRIZE</Text>
                                    <Text style={styles.bodyTextDesign}>$12,000</Text>
                                </View>

                                <View style={styles.boxWrapper}>
                                    <Text style={styles.headingTextDesign}>UNDER</Text>
                                    <Text style={styles.bodyTextDesign}>3.25x</Text>
                                </View>
                                <View style={styles.boxWrapper}>
                                    <Text style={styles.headingTextDesign}>OVER</Text>
                                    <Text style={styles.bodyTextDesign}>1.25x</Text>
                                </View>
                                <View style={styles.boxWrapper}>
                                    <Text style={styles.headingTextDesign}>ENTRY FEES</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.bodyTextDesign}>5   </Text>
                                            <Image source={require('../../Assets/dollar.png')} style={styles.dollerIcon} />
                                        </View>


                                    </View>
                                </View>

                            </View>
                            <View style={styles.middleSecondWrapper}>
                                <Text style={styles.whatPredictionText}>What’s your prediction?</Text>

                                <View style={styles.buttoncontainer}>
                                    <Touchable
                                        name={"Under"}
                                        onPress={() => { }} style={{ backgroundColor: '#442C55', width: '47%', }}
                                        src={require('../../Assets/down-arrow.png')}
                                    />
                                    <Touchable
                                        name={"Over"}
                                        onPress={handlePresentModalPress} style={{ backgroundColor: '#6231AD', width: '47%', }}
                                        src={require('../../Assets/arrow-upward.png')}
                                    />

                                </View>
                            </View>

                        </View>
                        <View style={styles.endWrapper}>
                            <View style={[styles.bodybottomWrapper, GlobalStyle.flexrow]}>
                                <View style={GlobalStyle.flexrow}>
                                    <Image source={require('../../Assets/player.png')} style={styles.dollerIcon} />
                                    <Text style={styles.textStyle}> 355 Players</Text>
                                </View>
                                <View style={GlobalStyle.flexrow}>
                                    <Image source={require('../../Assets/chart.png')} style={styles.dollerIcon} />
                                    <Text style={styles.textStyle}> View chart</Text>
                                </View>
                            </View>

                            <View style={styles.progressWrapper}>
                                <Progress.Bar height={10} width={null} borderWidth={0} color={Colors.pink} unfilledColor={Colors.green} progress={0.3} />
                                <View style={[styles.predictionWrapper, GlobalStyle.flexrow]}>
                                    <Text style={styles.headingTextDesign}>232 predicted under</Text>
                                    <Text style={styles.headingTextDesign}>123 predicted over</Text>
                                </View>
                            </View>
                         

                        </View>

                    </View>
                   

                    {/* ---Card view end--- */}

                </View>

                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    backdropComponent={BottomSheetBackdrop}>
                    <View style={styles.sheetWrapper}>
                        <Text style={styles.predText}>Your Prediction is Under</Text>
                        <Text style={styles.entryTickerStyle}>ENTRY TICKETS</Text>
                        <Text style={styles.wonTextStyle}>You can won</Text>
                        <View style={{ height: 200, justifyContent: 'center', }}>
                            <Text>
                                Picker Component Needs to be called.

                            </Text>
                        </View>
                        {/* ---Animated design start--- */}

                        {/* ---Animated design end--- */}


                        <View style={[GlobalStyle.flexrow, styles.moneyWrapperView]}>
                            <Text style={styles.moneyText}>$2000</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.bodyTextDesign}>Total  </Text>
                                <Image source={require('../../Assets/dollar.png')} style={styles.dollerIcon} />
                                <Text style={styles.bodyTextDesign}>  5</Text>
                            </View>


                        </View>
                        <Touchable
                            name={"Submit my prediction"}
                            onPress={handlePresentModalPress} style={{ backgroundColor: '#6231AD', width: '100%'}}
                            src={require('../../Assets/arrow-upward.png')}
                        />
                    </View>
                </BottomSheetModal>
            </BottomSheetModalProvider>

        </BodyWarpper>
    );
};

export default Home;
