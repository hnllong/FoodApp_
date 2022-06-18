import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, View, ScrollViewBase, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = ({route, navigation }) => {
    const [tk, setTK] = useState('');
    const [mk, setMK] = useState('');
    //  const {tkdk} = route.params;
    //  const {mkdk} = route.params;
    const [isSecureTextEntry, setSecureTextEntry] = useState(true);
    const [done, setdone] = useState('');
    const handleLogin = () => {
        if (tk === "123" && mk === "admin") {
            Alert.alert(
            "HLONG_food",
            "Đăng Nhập Thành Công!",);
            navigation.navigate("TabHome");
           
        }
        else {
            Alert.alert(  "HLONG_food",
            "Xin lỗi. Tài Khoản hoặc mật khẩu sai!");
        }
    }
    return (
        <ScrollView style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/images/baber1.png')}
                style={{ height: Dimensions.get('window').height / 2.5 }}>
            </ImageBackground>
            <View style={styles.bottomView}>
            
                    <View style={{ padding:30 }}>
                        
                        <Text style={{ color: '#4632A1', fontSize: 38 }}>Welcome</Text>
                        <Text>
                            Don't have an accoun't ?<TouchableOpacity onPress={() => navigation.navigate('DangKi')}>
                                <Text style={{ color: 'red', fontStyle: 'italic', marginLeft: 2, marginTop: 5 }}> Register now</Text></TouchableOpacity>
                        </Text>
                        <View style={styles.forgett}>
                            <TextInput
                                style={styles.input}
                                placeholder="account@gmail.com..."
                                onChangeText={(val) => setTK(val)}
                            />
                            <View style={styles.icon}>
                                <Icon name="check" size={25} color="#4632A1" />
                            </View>
                        </View>
                        <View style={styles.forgett}>
                            <TextInput
                                style={styles.inputt}
                                placeholder="enter password..."
                                onChangeText={(val) => setMK(val)}
                                secureTextEntry={isSecureTextEntry}
                            />
                            <View style={styles.icon}>
                                <TouchableOpacity onPress={() => {
                                    setSecureTextEntry((prev) => !prev)
                                }}>
                                    <Icon name={isSecureTextEntry ? "eye-slash" : "eye"} size={25} color="#4632A1" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        
                        <View style={styles.forgetPassword}>
                            <View style={styles.forget1}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setdone((prev) => !prev)
                                    }}>
                                    <Icon name={done ? "thumbs-up" : "check-square"} size={18} color="#4632A1" />
                                </TouchableOpacity>
                                <Text style={{ marginLeft: 5, color: 'red' }}>Remember me</Text>
                            </View>
                            <View style={styles.forget2}>
                                <TouchableOpacity>
                                    <Icon name="warning" size={18} color="#4632A1" />
                                </TouchableOpacity>
                                <Text style={{ marginLeft: 5, color: 'red' }}>Forget?</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.longg} onPress={handleLogin
                        }>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff' }}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop:40 }}> Or login with</Text>
                        <View style={styles.loginfb}>
                        <TouchableOpacity>
                        <Image
                            style={{ height:50, width:50 }}
                            source={require('../assets/images/fb.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image
                        style={{ height:50, width:50 }}
                            source={require('../assets/images/gg.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                         <Image
                        style={{ height:50, width:50 }}
                            source={require('../assets/images/TO.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image
                        style={{ height:50, width:50 }}
                            source={require('../assets/images/Git.png')}
                        />
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        width: 350,
        height: 50,
        marginTop: 23,
        padding: 10,
        borderBottomColor: '#4632A1',
        position: 'absolute',
        fontSize: 18,
        padding: 5,
        color: 'black',

    },
    inputt: {
        borderBottomWidth: 2,
        width: 350,
        height: 50,
        borderBottomColor: '#4632A1',
        position: 'absolute',
        fontSize: 18,
        padding: 5,
        color: 'black',
    },
    longg: {
        height: 50,
        width: Dimensions.get('window').width / 2,
        backgroundColor: '#4632A1',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 30,
        alignSelf: 'center',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    mxh: {
        height: '20%',
        width: '100%',
        marginHorizontal: 5,
    },
    forgett: {
        flexDirection: 'row',
        height: 50,
        width: 350,
        alignItems: 'center',
        marginVertical: 10,
    },
    icon: {
        height: 30,
        width: 30,
        position: 'relative',
        marginLeft: 320,
    },
    forgetPassword: {
        height: 50,
        width: 350,
        flexDirection: 'row',
    },
    forget1: {
        height: 50,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    forget2: {
        height: 50,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    loginfb: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginVertical:15,
    },
});

export default Login;