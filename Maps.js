// import React from 'react';
// import {
//     FlatList,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//     Button,
//     Image,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// import MapView, { PROVIDER_GOOGLE, Marker,Callout, Polygon} from 'react-native-maps';


// const MapsFood = () => {

//     return (
//         <>
//             <View style={styles.container}>
//                 <MapView

//                     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//                     style={styles.map}
//                     region={{
//                         latitude: 21.137287816965095,
//                         longitude:105.7967669626493,
//                         latitudeDelta: 0.2,
//                         longitudeDelta: 0.2,
//                     }}>
//                         {/* <Polygon
//                         coordinates={this.state.coordinate}
//                         /> */}
//                         <Marker
//                         coordinate={{latitude:21.137287816965095, longitude:  105.7967669626493}}>  
//                             <Callout style={{width:200, height:200}}>
//                             <Icon style={styles.iconVouncher} name="cutlery" />
//                                 <Text style={{fontWeight:'bold', fontSize:20}}>LongHuyenAnh_Food</Text>
//                             </Callout>

//                         </Marker>
//                     </MapView>
//             </View>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     map: {
//         height: 500,
//         width: 500,

//     },
//     iconVouncher :{
//         fontSize:90,
//         marginHorizontal:70,
//       marginVertical:40,
//         color:'red',
//     }
// });

// export default MapsFood;
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity,
    Pressable,
    Linking
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
const Maps = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const initialRegion = {
        latitude: 21.137287816965095,
        longitude: 105.7967669626493,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={Styles.container}
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}>
                <Marker
                    coordinate={{ latitude: 21.137287816965095, longitude: 105.7967669626493 }}>
                    <Callout style={{ width: 200, height: 200 }}>
                        <Icon style={Styles.iconVouncher} name="cutlery" />
                        <Text style={{ fontWeight: 'bold', fontSize: 23,marginHorizontal:25, color: 'green' }}>HLONG_Food</Text>
                    </Callout>
                </Marker>
            </MapView>
            <View style={Styles.search}>
                <View style={Styles.search1}>
                    {/* <Image source={require('../../assets/images/1.png')} /> */}
                    <TextInput style={Styles.input} placeholder="Search" />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.75, backgroundColor: '#fff' }}>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={Styles.header}>
                            <View style={Styles.header1}>
                                <Image
                                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    source={require('./assets/images/nhahang1.jpg')}
                                />

                            </View>
                            <View style={Styles.header1}>

                                <Image
                                    style={{ width: '100%', height: 206, resizeMode: 'contain' }}
                                    source={require('./assets/images/nhahang3.jpg')}
                                />
                            </View>
                            <View style={Styles.header1}>
                                <Image
                                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    source={require('./assets/images/nhahang6.jpg')}
                                />
                            </View>
                            <View style={Styles.header1}>
                                <Image
                                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    source={require('./assets/images/nhahang7.png')}
                                />
                            </View>
                            <View style={Styles.header1}>
                                <Image
                                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    source={require('./assets/images/nhahang8.jpg')}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <Pressable style={{ position: 'absolute', top: 110, left: 300 }}
                        onPress={() => setModalVisible(true)} >
                        <View style={{ width: 120, height: 33, backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: 20 }}>
                            <Icon name="bars" size={23} color="black" />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Thực Đơn</Text>
                        </View>
                    </Pressable>
                    <View style={Styles.modalmenu}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            isVisible={modalVisible}
                            backdropColor="black"
                            backdropOpacity={0.75}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={{ flex:0.7, flexDirection:'row', alignItems:'center' , position:'relative' }}>
                                <Image
                                    style={{width: '100%', height: '100%',resizeMode: 'contain' }}
                                    source={require('./assets/images/malada2.png')}
                                />
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{position:'absolute',right:340, top:-260}}>
                                        <Icon name="times" size={40} />
                                    </Text>
                                </Pressable>
                            </View>

                        </Modal>
                    </View>

                </View>

                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={Styles.tilte}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, marginLeft: 10, color: 'green' }}>HLONG_Food</Text>
                            <View style={{ flexDirection: 'row', marginRight: 20, }}>
                                <Icon name="star" size={25} color="yellow" />
                                <Icon name="star" size={25} color="yellow" />
                                <Icon name="star" size={25} color="yellow" />
                                <Icon name="star" size={25} color="yellow" />
                                <Icon name="star" size={25} color="yellow" />
                            </View>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>restaurant</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Nhà Hàng : Xóm Trại, Kim Nỗ, Đông Anh, Hà Nội</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 10, color: 'green' }}>Đang mở cửa .
                            <Text style={{ color: 'black' }}> Đóng cửa lúc 22:00</Text></Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity>
                            <View style={{ width: 110, height: 40, backgroundColor: '#fff', marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 20, borderWidth: 1, borderColor: '#bec2c2' }}>
                                <Icon name="phone" size={29} color="blue" />
                                <Text onPress={()=>{Linking.openURL('tel:0392481929');} }
                                style={{ fontWeight: 'bold', fontSize: 20, color: 'blue' }}>Liên Hệ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 125, height: 40, backgroundColor: '#fff', marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 20, borderWidth: 1, borderColor: '#bec2c2' }}>
                                <Icon name="map-marker" size={30} color="blue" />
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'blue' }}
                                onPress={() =>
                                    Linking.openURL(
                                      'https://www.google.com/maps/place/Kim+N%E1%BB%97,+%C4%90%C3%B4ng+Anh,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.1364537,105.7798003,14z/data=!3m1!4b1!4m5!3m4!1s0x3135003cec8d7669:0xe1845da1d70ec0d9!8m2!3d21.1371732!4d105.7967419?hl=vi-VN',
                                    )
                                  }>Đường đi</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 115, height: 40, backgroundColor: '#fff', marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 20, borderWidth: 1, borderColor: '#bec2c2' }}>
                                <Icon name="share" size={30} color="blue" />
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'blue' }}
                                 onPress={() =>
                                    Linking.openURL(
                                      'https://www.facebook.com/Book-e-commere-104244788683041',
                                    )
                                  }>Chia sẻ</Text>
             
                            </View>
                        </TouchableOpacity>
                    </View>
                     
                </ScrollView>

               
            </View>

        </View >
    );
};
// 21.04639947170033, 105.78491492015995
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
    },
    modalmenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red'
    },
    tilte: {
        height: 100,
        width: '100%',
    },
    header1: {
        width: 200,
        height: 180,
        marginHorizontal: 10,
       
    },
    ImageMap: {
        width: 400,
        height: 200,
        position: 'absolute',
        // resizeMode: 'contain',
        bottom: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: '#CCCCCC',
        borderWidth: 1,
    },
    MarkerText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 5,
    },
    StatusText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 5,
        color: '#2BC411',
    },
    StatusText2: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 5,
        color: '#CCD5F3',
    },

    MarkerImage: {
        width: 150,
        height: 150,
    },
    search: {
        height: 48,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 18,
        position: 'absolute',
        top: 30,
        left: 30,
    },
    search1: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        marginLeft: 15,
    },
    input: {
        height: 40,
        width: '100%',
        padding: 10,
        fontSize: 18,
        lineHeight: 27,
        color: 'black',
    },
    backgrProduct: {
        width: 200,
        height: 200,
    },
    iconVouncher: {
        fontSize: 90,
        marginHorizontal: 70,
        marginVertical: 40,
        color: 'red',
    }

});

export default Maps;