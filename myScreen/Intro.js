import Swiper from 'react-native-swiper'
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
const StartIntroApp = ({navigation}) => {
    return (
        <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
                <ImageBackground
                    style={styles.introApp}
                    source={require('../assets/images/long.png')}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                        <Text style={{ textAlign: 'right', marginHorizontal: 15, marginVertical: 10, textDecorationLine: 'underline', fontSize: 20 }}>Skip</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.slide2}>
                <Image
                    style={styles.introApp}
                    source={require('../assets/images/long111.png')}
                />
            </View>
            <View style={styles.slide3}>
                <ImageBackground
                    style={styles.introApp1}
                    source={require('../assets/images/long99.png')}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={styles.introApp2}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Get Started</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </Swiper>
    );
}





const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'White'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'White'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'White',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    introApp: {
        height: '100%',
        width: '100%',
    },
    introApp1: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    introApp2: {
        height: 50,
        width: 300,
        backgroundColor: '#22A45D',
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
})
export default StartIntroApp;