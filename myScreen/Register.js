import { Button, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

function Dangki({ navigation }) {
    const [tkdk, setTKDK]= useState('');
    const [mkdk, setMKDK]= useState('');

    return (
        <ScrollView style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/images/long21.jpg')}
                style={{ height: Dimensions.get('window').height / 2.5 }}>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{ padding: 30 }}>
                    <Text style={{ color: '#4632A1', fontSize: 37 }}>Welcome</Text>
                    <Text style={{fontStyle:'italic'}}>
                       create new account and log in!
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tài khoản tạo mới...."
                        onChangeText={(txt) => setTKDK(txt)}
                        value={tkdk}
                    />
                     <TextInput
                    style={styles.inputt}
                    placeholder="nhập mật khẩu mới...."
                    onChangeText={(txt) => setMKDK(txt)}
                    value={mkdk}
                />
                 <TextInput
                    style={styles.inputt}
                    placeholder="xác nhận mật khẩu....."
                    onChangeText={(val) => setMK(val)}
               
                />
                 <TextInput
                    style={styles.inputt}
                    placeholder="Nhập số điện thoại đăng kí..... "
                    onChangeText={(val) => setMK(val)}
                />
                    <TouchableOpacity style={styles.longg} 
                    onPress={() => navigation.goBack()

                    }
                    // onPress={() => navigation.navigate('Login'),{
                    //          tkdk,
                    //         mkdk,
                    //      }}
                    >
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Register</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        width: 350,
        height: 50,
        marginTop: 22,
        padding: 10,
        borderBottomColor:'#4632A1',

    },
    inputt: {
        borderBottomWidth: 2,
        width: 350,
        height: 50,
        borderBottomColor:'#4632A1',
        marginTop: 22,
    },
    longg: {
        height: 50,
        width: Dimensions.get('window').width / 2,
        backgroundColor: '#4632A1',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 58,
        alignSelf: 'center',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },

   
});
export default Dangki;