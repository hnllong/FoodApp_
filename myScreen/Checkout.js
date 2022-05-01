import React from 'react';
import { useState } from 'react';

import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from "react-redux"



const Checkout = ( {navigation}) => {
    
    const sumMoney = useSelector(store => store.HomeReducers.sumMoney) 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <ImageBackground style={styles.imgBackgr} source={require('../assets/images/long44.jpg')} >
                        <View style={styles.head}>
                            <View style={styles.headTrai}>
                            <Icon name="chevron-left" size={25} color="#4632A1" onPress={() => navigation.goBack()} />
                                {/* <Ionicons name="chevron-back" size={24} color="blue" onPress={() => navigation.navigate('Cart')}/> */}
                                <Text onPress={() => navigation.navigate('Cart')}
                                style={{ fontSize: 20, marginLeft:5, color: 'blue' }}>Quay lại</Text>
                            </View>
                            <View style={styles.headPhai}>
                                <Text style={{ fontSize: 20, }}>Chi tiết đơn hàng</Text>
                            </View>
                        </View>
                        <View style={styles.ThongBao}>
                            <View style={styles.ThongBaoTrai}>
                                <Text style={{ fontSize: 20, marginLeft: 0, color: 'white' }}>Đã xác nhận</Text>
                                <Text style={{ fontSize: 17, color: 'white' }}>Đơn hàng đã được xác nhận. Vui lòng kiểm tra thông tin trước khi gửi cho đơn vị vận chuyển.</Text>
                            </View>
                            <View style={styles.ThongBaoPhai}>
                            <Icon name="check" size={55} color="#fff" />
                            </View>
                        </View>
                        <View style={styles.ThongTin}>
                            <View style={{ flexDirection: 'row' }}>
                                {/* <MaterialCommunityIcons name="google-maps" size={24} color="black" /> */}
                                <Icon name="rocket" size={25} color="black" />
                                <Text style={{ fontSize: 20, marginLeft: 5, color: 'black', fontWeight: 'bold' }}>Địa chỉ nhận hàng</Text>
                            </View>

                            <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Xã Kim Nỗ , Huyện Đông Anh , Hà Nội</Text>

                        </View>
                        <View style={styles.ThongTin1} >
                            <View style={styles.sdtTrai}>
                                <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', fontWeight: 'bold' }}>Số điện thoại</Text>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>0392481929</Text>

                            </View>
                            <View style={styles.sdtPhai}>
                                {/* <Foundation name="telephone" size={35} color="#228B22" />
                               
                                <AntDesign name="message1" size={35} color="#00008B" /> */}
                                  <Icon name="phone" size={25} color="#228B22" />
                                  <Icon name="comment" size={25} color="#00008B" />
                            </View>
                        </View>
                        <View style={styles.ThongTin2} >
                            <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', fontWeight: 'bold', borderBottomWidth: 1 }}>Hoàng Ngọc Long</Text>
                            <View style={styles.thongtindonhang}>
                                <Image
                                    style={styles.imgSP}
                                    source={require('../assets/images/long3.jpg')}
                                />
                                <View>
                                    <Text style={{ fontSize: 20, marginLeft: 0, color: 'green', fontWeight: 'bold', }}>Thành viên bạc</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Nhận được hàng vào thứ 7  </Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Rất hài lòng chát lượng phục vụ.</Text>
                                </View>
                            </View>
                            <View style={styles.thongtindonhang}>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Đơn vị vận chuyển</Text>
                                <Text style={{ fontSize: 16,  color: 'black', marginLeft: 90 }}>Giao hàng nhanh</Text>
                                {/* <Entypo name="chevron-down" size={24} color="black" /> */}
                                <Icon style={{marginLeft:5}} name="chevron-down" size={22} color="black" />
                            </View>
                            <View style={styles.thongtindonhang}>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Mã đơn hàng</Text>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black', marginLeft: 110, marginRight: 5 }}>GHN7893435464jhjd</Text>
                                {/* <Ionicons name="md-copy-outline" size={24} color="black" /> */}
                                <Icon name="save"  style={{marginLeft:5}} size={25} color="black" />
                            </View>
                            <View style={styles.thongtindonhang}>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Thời gian đặt</Text>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black', marginLeft: 130, marginRight: 5 }}>28/12/2021 23:50</Text>
                            </View>
                            <View style={styles.thongtindonhang}>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Tổng thanh toán</Text>
                                <Text style={{ fontSize: 23, marginLeft: 0, color: 'red', marginLeft: 130, marginRight: 5 }}>{sumMoney}</Text>
                            </View>


                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.goBack()} 
                        >
                            <Text style={{ fontSize: 20, color: 'white'}}>
                                Hủy đơn hàng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button1}
                        >
                            <Text style={{ fontSize: 20, color: 'white'}}
                            onPress={() => navigation.navigate('Xacnhan')}
                            >
                                Đặt hàng ngay
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    content: {
        flex: 14,
    },
    imgBackgr: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    head: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headTrai: {
        flex: 1.5,
        flexDirection: 'row',

    },
    headPhai: {
        flex: 3,
    },
    ThongBao: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#006400',
    },
    ThongBaoTrai: {
        flex: 3.5,
        // flexDirection: 'row',
        paddingLeft: 15,
    },
    ThongBaoPhai: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ThongTin: {
        width: '100%',
        height: 90,
        backgroundColor: '#fff',
        marginTop: 10,
        justifyContent: 'center',
        paddingLeft: 15,

    },
    ThongTin1: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        marginTop: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row',
    },
    sdtTrai: {
        flex: 3.5,

    },
    sdtPhai: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 20,
    },
    ThongTin2: {
        width: '100%',
        height: 330,
        backgroundColor: '#fff',
        marginTop: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,

    },
    thongtindonhang: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    imgSP: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#FFE350',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'red',
        marginTop: 10,
        width: 250,
        height: 50,
        alignItems:'center',
    },
    button1: {
        justifyContent: 'center',
        backgroundColor: '#FFE350',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'green',
        marginTop: 10,
        width: 250,
        height: 50,
        alignItems:'center',
    }
});

export default Checkout;
