

import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PhaoHoa from '../../phaohoa';
import HoangLe from '../../hoangle';
import ConfettiCannon from 'react-native-confetti-cannon';
import Fireworks from "react-native-fireworks";
const Countdown = () => {
    const [shoot, setShoot] = useState(false);

    useEffect(() => {
        //Time out to fire the cannon
        setTimeout(() => {
            setShoot(true);
        },);
    },);

    const handlePress = () => {
        //To fire the cannon again
        setShoot(false);
        setTimeout(() => {
            setShoot(true);
        },);
    };
    const [totalDuration, setTotalDuration] = useState(0);
    const [done, setdone] = useState('');
    const [huyen, setHuyen] = useState('');
    // let countDate = new Date("August 31, 2021 00:00:00 ").getTime();
    useEffect(() => {
        var date = moment().utcOffset('+07:00').format('YYYY-MM-DD hh:mm:ss');
        var expirydate = new Date('December 31, 2021 00:00:00').getTime();
        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        setTotalDuration(d);
    }, []);
    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../assets/images/nenvoucher2.png')}
                style={{
                    flex: 2,
                    resizeMode: 'contain',
                }}>
                <View style={styles.coutdown}>

                    <CountDown
                        size={25}
                        until={60 * 10 + 30}
                        onFinish={() => alert('Finished')}
                        onPress={() => alert('Hãy Nhanh Tay săn voucher ưu đãi ')}
                        digitStyle={{
                            backgroundColor: '#FFF',
                            borderWidth: 2,
                            borderColor: '#1CC625',
                        }}
                        digitTxtStyle={{ color: '#1CC625' }}
                        timeLabelStyle={{ color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}
                        separatorStyle={{ color: '#1CC625' }}
                        timeToShow={['D', 'H', 'M', 'S']}

                        showSeparator
                    />

                </View>

            </ImageBackground>
            <View style={styles.Voucher}>
                <ScrollView style={{ flex: 1, }}>

                    <ImageBackground
                        style={{ flex: 8, width: '100%', alignItems: "center" }}
                        source={require('../../assets/images/long44.jpg')}>
                        <Image
                            style={{ width: '110%', height: 80, left: 20 }}
                            source={require('../../assets/images/huyen1.jpg')}
                        />
                        <TouchableOpacity onPress={handlePress}>
                            <View style={styles.viewVoucher}>
                                {shoot ?
                                    <ConfettiCannon
                                        count={200}
                                        origin={{ x: -10, y: 0 }}
                                    />
                                    : null
                                }
                                <View style={styles.imgVoucher}  >
                                    <Image
                                        style={styles.stretch}
                                        source={require('../../assets/images/huyen2.jpg')}
                                    />
                                    <Text style={styles.nameVoucher}>
                                        Miễn phí vận chuyển
                                    </Text>
                                </View>
                                <View style={styles.thongtinVoucher}>
                                    <Text style={styles.textVoucher1}>
                                        Giảm giá cho đơn ...
                                    </Text>
                                    <Text style={styles.textVoucher2}>
                                        Giảm tối đa 20k
                                    </Text>
                                    <Text style={styles.textVoucher3} >
                                        Có hiệu lực từ 28.12
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            setdone((prev) => !prev)
                                        }}

                                    >
                                        {/* <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}> Lưu</Text> */}
                                        {/* <Icon name={done ? "thumbs-up" : "check-square"} size={18} color="#4632A1" /> */}
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>{done ? 'Đã Lưu' : 'Lưu'}</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewVoucher}>

                            <View style={styles.imgVoucher}>
                                <Image
                                    style={styles.stretch}
                                    source={require('../../assets/images/huyen2.jpg')}
                                />
                                <Text style={styles.nameVoucher}>
                                    Hoàn xu 20%
                                </Text>
                            </View>
                            <View style={{
                                position: 'absolute',
                                width: 120,
                                height: 30,
                                backgroundColor: 'yellow',
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: -10,
                            }}>
                                <Text style={{ color: 'red', fontStyle: 'italic', }}>Số lượng có hạn</Text>
                            </View>
                            <View style={styles.thongtinVoucher}>
                                <Text style={styles.textVoucher1}>
                                    Giảm giá cho đơn ...
                                </Text>
                                <Text style={styles.textVoucher2}>
                                    Tối đa 20%
                                </Text>
                                <Text style={styles.textVoucher3}>
                                    Có hiệu lực từ 15.01
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        setdone((prev) => !prev)
                                    }}
                                >
                                    {/* <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}> Lưu</Text> */}
                                    {/* <Icon name={done ? "thumbs-up" : "check-square"} size={18} color="#4632A1" /> */}
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>{huyen ? 'Lưu' : 'Đã lưu'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewVoucher}>
                            <View style={styles.imgVoucher}>
                                <Image
                                    style={styles.stretch}
                                    source={require('../../assets/images/huyen2.jpg')}
                                />
                                <Text style={styles.nameVoucher}>
                                    Miễn phí vận chuyển
                                </Text>
                            </View>
                            <View style={styles.thongtinVoucher}>
                                <Text style={styles.textVoucher1}>
                                    Giảm giá cho đơn ...
                                </Text>
                                <Text style={styles.textVoucher2}>
                                    Giảm tối đa 20k
                                </Text>
                                <Text style={styles.textVoucher3}>
                                    Có hiệu lực từ 28.12
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                >
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}> Lưu</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground>
                </ScrollView>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Voucher: {
        flex: 4,
    },
    coutdown: {
        marginTop: 110,
        marginRight: 157,
    },
    viewVoucher: {
        width: '96%',
        backgroundColor: '#fff',
        height: 150,
        flexDirection: 'row',
        marginTop: 20,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: 'grey',
    },
    imgVoucher: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: "center",

    },
    stretch: {
        width: 150,
        height: 150,
    },
    thongtinVoucher: {
        width: 200,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    textVoucher1: {
        color: '#111',
        fontSize: 20,
    },
    textVoucher2: {
        color: '#FF4500',
        fontSize: 18,
    },
    textVoucher3: {
        color: 'grey',
        fontSize: 15,
    },
    nameVoucher: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        left: 20,
        right: 5,
    },
    button: {
        width: 60,
        height: 30,
        backgroundColor: '#228B22',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        top: 90,
        right: 30,
    }

})

export default Countdown;