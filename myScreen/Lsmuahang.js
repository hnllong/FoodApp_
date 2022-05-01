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
    TextInput,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const LSMuaHang = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <View style={styles.headTrai}>
                    <Image
                        style={styles.imageUser}
                        source={require('../assets/images/long3.jpg')}
                    />
                </View>
                <View style={styles.headPhai}>
                    <Text style={{ fontSize: 20, }}>Đơn hàng</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <ImageBackground style={styles.imgBackgr} source={require('../assets/images/long44.jpg')} >
                        <View style={{width:'100%', alignItems:'center', flexDirection:'row'}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Tìm kiếm "
                                keyboardType="numeric"
                            />
                            {/* <AntDesign name="search1" size={24} color="black" style={{ position: 'absolute', top: 20, right: 50 }} /> */}
                            <Icon name="search" size={24} color="black" />
                        </View>
                        <View style={styles.head}>
                            <View style={styles.Trangthai}>
                                <Text style={{ fontSize: 14, borderBottomWidth: 0.5, color: 'orange', }}>Tất cả(3)</Text>
                            </View>
                            <View style={styles.Trangthai}>
                                <Text style={{ fontSize: 14, }}>Chờ xác nhận</Text>
                            </View>
                            <View style={styles.Trangthai2}>
                                <Text style={{ fontSize: 14, }}>Giao thành công</Text>
                            </View>
                            <View style={styles.Trangthai}>
                                <Text style={{ fontSize: 14, }}>Đã hủy</Text>
                            </View>
                        </View>
                        <View style={styles.ThongTin2} >
                            <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', borderBottomWidth: 1 }}>#GHN7893435464jhjd</Text>
                            <View style={styles.thongtindonhang}>
                                <Image
                                    style={styles.imgSP}
                                    source={{
                                        uri: 'https://cdn.jamja.vn/blog/wp-content/uploads/2018/06/quan-thit-cho-ngon-o-ha-noi.jpg',
                                    }}
                                />
                                <View>
                                    <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', fontWeight: 'bold', }}>Thịt Chó</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Thôn Tằng My, xã Nam Hồng, huyện Đ...</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Size L - x2 - 120.000 đ</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'blue', textDecorationLine: 'underline', marginTop: 10 }}>Chờ xác nhận</Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.ThongTin2} >
                            <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', borderBottomWidth: 1 }}>#GHTK7897635464ljiu</Text>
                            <View style={styles.thongtindonhang}>
                                <Image
                                    style={styles.imgSP}
                                    source={{
                                        uri: 'https://bepxua.vn/wp-content/uploads/2021/06/ga-luc-lac-500x500.jpg',
                                    }}
                                />
                                <View>
                                    <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', fontWeight: 'bold', }}>Pizza thập cẩm</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Thôn Tằng My, xã Nam Hồng, huyện Đ...</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Size M - x1 - 60.000 đ</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'red', textDecorationLine: 'underline', marginTop: 10 }}>Đã Hủy</Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.ThongTin2} >
                            <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', borderBottomWidth: 1 }}>#GHTK7897988675hyt</Text>
                            <View style={styles.thongtindonhang}>
                                <Image
                                    style={styles.imgSP}
                                    source={{
                                        uri: 'https://nguyenhafood.vn/uploads/images/Hamburger%20b%C3%B2%20%C3%9Ac%20Rum%20Jungle%20%20%283%29.jpg',
                                    }}
                                />
                                <View>
                                    <Text style={{ fontSize: 20, marginLeft: 0, color: 'black', fontWeight: 'bold', }}>Burger gà</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>Thôn Tằng My, xã Nam Hồng, huyện Đ...</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'black' }}>x1 - 55.000 đ</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 0, color: 'green', textDecorationLine: 'underline', marginTop: 10 }}>Giao thành công</Text>

                                </View>
                            </View>
                        </View>
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
        // alignItems:'center',
        marginTop: 60,
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

    button: {
        justifyContent: 'center',
        backgroundColor: '#FFE350',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'red',
        marginTop: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
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
        alignItems: 'center',
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        top: -70,
        borderWidth: 4,
        borderColor: '#fff',
        padding: 10,
    },
    input: {
        width: '80%',
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 20,
    },
    Trangthai: {
        flex: 1,
        alignItems: 'center'
    },
    imgSP: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    thongtindonhang: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,

    },
    ThongTin2: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        marginTop: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,

    },
});

export default LSMuaHang;
