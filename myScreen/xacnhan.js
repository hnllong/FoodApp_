
import React, { useEffect, useState } from 'react';
import { Button, ImageBackground, ImageBackgroundBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../loading';


export default function Xacnhan({ navigation }) {

    return (

        <View style={styles.container}>
        <View style={{width:2, height:2}}>
            <Loading />
        </View>    
            
            <ImageBackground style={styles.imgBackgr} source={require('../assets/images/long44.jpg')}>
                {/* <AntDesign name="checkcircle" size={100} color="green" /> */}

                <Icon name="check" size={150} color="green" />
                <Text style={styles.textThongBao}>Thành công!</Text>
                <Text style={{ fontSize: 20 }}>Đơn hàng đã được thêm thành công.</Text>
                <Text style={{ fontSize: 20, marginHorizontal: 5 }}>Để kiểm tra thông tin vui lòng truy cập "Đơn hàng của tôi" trong tab "Hồ sơ cá nhân".</Text>
                {/* <View style={styles.button}>
          <AntDesign name="rightcircle" size={24} color="white"
            style={{
              position: 'absolute',
              top: 20,
              right: 15,
            }}
          />
          <Button
            title="Đơn hàng của tôi"
            color="#cf2d5e"

          />

        </View> */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('LSMuaHang')}
                >

                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Xem Giỏ Hàng
                    </Text>
                    <Icon name="chevron-right" size={24} color="#fff"
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 15,
                        }}
                    />
                </TouchableOpacity>
            </ImageBackground> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textThongBao: {
        fontSize: 30,
        color: '#2d3d6b',
    },
    button: {
        marginTop: 30,
        width: '70%',
        height: 60,
        backgroundColor: '#cf2d5e',
        justifyContent: 'center',
        borderRadius: 35,
        alignItems: 'center',
    },
    imgBackgr: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
});
