import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    Alert, Modal, Pressable,
    Image, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableHighlight,
    TouchableOpacity, View, ScrollView, ImageBackground, RefreshControl,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default function Chitietcamnang1({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={{
                    width: '100%', height: '100%',
                    //borderRadius: 10,              
                    marginTop: 5, //marginBottom: 15,
                    backgroundColor: 'black',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                   
                    <Image
                        style={styles.imgnd}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eYMeJrdf5Fvvk69Ff3rDV0fPvkEodqhDWw&usqp=CAU',
                        }}

                    />
                     <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: 'grey',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            top:30,
                            left:10,
                            
                        }}>
                        {/* <Ionicons
                            name="arrow-back"
                            size={26}
                            color="black"
                            onPress={() => navigation.navigate('Camnang')}
                        /> */}
                         <Icon name="arrow-left" size={24} color="orange" onPress={() => navigation.navigate('Camnang')} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView style={{ width: '100%', backgroundColor: 'white', flex: 1 }}>
                    <View style={{
                        width: '100%', height: 220,
                        //borderRadius: 10,              
                        //marginTop: 5, //marginBottom: 15,
                        backgroundColor: '#261e1e',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        //marginLeft:10,
                    }}>
                        <View style={styles.bt}>
                            <View style={styles.tren}>
                                <Text style={{ color: 'white', fontSize: 30, marginLeft: 10, fontWeight: "bold", }}>Pizza ????o</Text>
                                {/* <FontAwesome5 name="pizza-slice" size={30} color="orange" /> */}
                                <Icon name="star" size={24} color="orange" />
                            </View>
                            <View style={styles.giua1}>
                                <Image
                                    style={styles.imgavt}
                                    source={{
                                        uri: 'https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg',
                                    }}
                                />
                                <Text style={{ color: 'white', fontSize: 25, marginLeft: 10, }}>User-one</Text>

                            </View>
                            <View style={styles.duoi}>
                                <Text style={{ color: 'white', fontSize: 20, marginLeft: 10, }}>???????t l??u r???i c?? th??? qua pizza c???a FoodApp, ??n c??ng th???y l??? l??? v?? kh?? th??m ngon. M???y nay chi???u m??t tr???i, con b?? nh?? nh???c m??n n??y n??n c??ng l??m th??? ?????i b???a...</Text>

                            </View>

                        </View>

                    </View>
                    <View style={{
                        width: '100%', height: 500,
                        //borderRadius: 10,              
                        //marginTop: 5, //marginBottom: 15,
                        backgroundColor: 'black',
                        // flexDirection:'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        //marginLeft:10,
                    }}>
                        <View style={styles.content1}>
                            <View style={styles.bentren}>
                                <Text style={{ color: 'white', fontSize: 30, marginLeft: 15, fontWeight: 'bold', }}>Nguy??n Li???u</Text>
                            </View>
                            <View style={styles.benduoi}>
                                {/* <Ionicons name="people-outline" size={20} color="white" /> */}
                                <Text style={{ color: 'white', fontSize: 20, marginLeft: 10, }}>3 c??i</Text>
                            </View>
                        </View>
                        <View style={styles.content2}>
                            <Text style={{ color: 'white', fontSize: 22, marginLeft: 15, textDecorationLine: "underline" }}>Ph???n b???t 1 -</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  120 g b???t m?? nguy??n c??m</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  2 g men</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  15 g m???t ong</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  180 g n?????c</Text>
                        </View>
                        <View style={styles.content3}>
                            <Text style={{ color: 'white', fontSize: 22, marginLeft: 15, textDecorationLine: "underline" }}>Ph???n b???t 2 -</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  180 g b???t m??</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  3 g men</Text>
                        </View>
                        <View style={styles.content4}>
                            <Text style={{ color: 'white', fontSize: 22, marginLeft: 15, textDecorationLine: "underline" }}>Ph???n nguy??n li???u 3</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  45 g d???u olive</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  4 g mu???i</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  1 mc l?? th??m</Text>
                        </View>
                        <View style={styles.content5}>
                            <Text style={{ color: 'white', fontSize: 22, marginLeft: 15, textDecorationLine: "underline" }}>Topping: t??y th??ch</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  5-6 mi???ng ????o h???p</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  t??m n??n, m???c, x??c x??ch...</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 15, }}>  ph??-mai mozza b??o</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '100%', height: 580,
                        //borderRadius: 10,              
                        //marginTop: 5, //marginBottom: 15,
                        backgroundColor: '#261e1e',
                        // flexDirection:'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        //marginLeft:10,
                    }}>
                        <View style={styles.content6}>
                            <Text style={{ color: 'white', fontSize: 30, marginLeft: 15, fontWeight: 'bold', }}>C??c B?????c L??m</Text>
                        </View>
                        <View style={styles.content7}>
                            {/* <MaterialCommunityIcons name="numeric-1-circle" size={20} color="white"
                                style={{
                                    position: 'absolute',
                                    left: 10,
                                }} /> */}
                                 <Icon name="star" size={24} color="orange" style={{
                                    position: 'absolute',
                                    left: 10,
                                }}/>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}>Tr???n c??c nguy??n li???u trong ph???n b???t 1, tr???n cho ?????ng nh???t</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}>R??y ph???n b???t th??? 2 l??n m???t ph??? ?????u ph???n b???t th??? 1. ?????y k??n ????? 1 ngh??? 1-1,5h.(ho???c trong ng??n m??t ?????n khi d??ng)</Text>
                        </View>
                        <View style={styles.content7}>
                            {/* <MaterialCommunityIcons name="numeric-2-circle" size={20} color="white"
                                style={{
                                    position: 'absolute',
                                    left: 10,
                                }} /> */}
                                 <Icon name="star" size={24} color="orange" style={{
                                    position: 'absolute',
                                    left: 10,
                                }}/>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}>Cho ph???n gia v??? v??o tr???n nh???i ?????n khi b???t m???n,c?? th??? k??o m??ng.B???c k??n ????? b???t ngh??? ?????n khi n??? 1,5-2 l???n.</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}>?????m b???t cho tho??t b???t kh??. Chia l??m 3 ph???n t??y th??ch</Text>
                        </View>
                        <View style={styles.content7}>
                            {/* <MaterialCommunityIcons name="numeric-3-circle" size={20} color="white"
                                style={{
                                    position: 'absolute',
                                    left: 10,
                                }} /> */}
                                 <Icon name="star" size={24} color="orange" style={{
                                    position: 'absolute',
                                    left: 10,
                                }}/>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}>Ph???n topping:</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}> - t??m l???t v???, m???c c???t nh???, tr???n ??t d???u olive</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}> - ????o h???p c???t mi???ng nh???</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}> - phomai b??o</Text>
                        </View>
                        <View style={styles.content7}>
                            {/* <MaterialCommunityIcons name="numeric-4-circle" size={20} color="white"
                                style={{
                                    position: 'absolute',
                                    left: 10,
                                }} /> */}
                                 <Icon name="star" size={24} color="orange" style={{
                                    position: 'absolute',
                                    left: 10,
                                }}/>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}>B???t l?? 220oC tr?????c 15', cho khay ??en k??m l?? v??o lu??n.</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}> - d??ng niwax x??m l??n m???t b??nh</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}> - l???p phoomai m???ng - ????o - t??m m???c x??c x??ch  </Text>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 35, }}> - ??em b??nh cho v??o khay n?????ng t???m 20'</Text>
                        </View>
                        <View style={styles.content8}>
                            <View style={styles.content9}>
                                {/* <AntDesign name="" size={24} color="red" /> */}
                                <Icon name="heart" size={24} color="red"/>
                            </View>
                            <View style={styles.content10}>
                                {/* <FontAwesome name="comment-o" size={24} color="red" /> */}
                                <Icon name="comment" size={24} color="red"/>
                            </View>
                            <View style={styles.content11}>
                                {/* <SimpleLineIcons name="share" size={24} color="red" /> */}
                                <Icon name="share" size={24} color="red"/>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: '100%', height: 200,
                        //borderRadius: 10,              
                        //marginTop: 5, //marginBottom: 15,
                        backgroundColor: '#261e1e',
                        // flexDirection:'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        //marginLeft:10,                      
                    }}>
                        <Image
                            style={styles.imgavt}
                            source={{
                                uri: 'https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg',
                            }}
                        />
                        <Text style={{ color: 'white', fontSize: 20, }}>L??n s??ng b???i</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>User-one</Text>
                        <Text style={{ color: 'white', fontSize: 20, }}>V??o ng??y 16 th??ng 12 n??m 2021</Text>
                    </View>



                </ScrollView>
            </View>

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
    head: {
        //backgroundColor: '#daf2dc',
        width: '100%',
        flex: 4,

    },
    content: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 8,
    },


    home: {
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    imgnd: {
        width: '90%',
        height: '100%',
    },
    bt: {
        width: '100%',
        height: 160,
        //backgroundColor:'blue',
    },
    tren: {
        width: '100%',
        height: 50,
        //backgroundColor:'#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    giua1: {
        width: '100%',
        height: 60,
        //backgroundColor:'blue',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
    },
    duoi: {
        width: '100%',
        height: 70,
        //backgroundColor:'white',
    },
    imgavt: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    content1: {
        width: '100%',
        height: 80,
        backgroundColor: '#261e1e',
        justifyContent: 'center',
    },
    bentren: {
        width: '100%',
        height: 40,
    },
    benduoi: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        marginLeft: 20,
    },
    content2: {
        width: '100%',
        height: 100,
        backgroundColor: '#261e1e',
    },
    content3: {
        width: '100%',
        height: 120,
        backgroundColor: '#261e1e',
        justifyContent: 'center',

    },
    content4: {
        width: '100%',
        height: 100,
        backgroundColor: '#261e1e',
    },
    content5: {
        width: '100%',
        height: 100,
        backgroundColor: '#261e1e',
    },
    content6: {
        width: '100%',
        height: 100,
        backgroundColor: '#261e1e',
        justifyContent: 'space-around',
        //alignItems:'center',
    },
    content7: {
        width: '100%',
        height: 100,
        backgroundColor: '#261e1e',
    },
    content8: {
        width: '99%',
        height: 80,
        backgroundColor: '#261e1e',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
    },
    content9: {
        width: '30%',
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    content10: {
        width: '30%',
        height: 40,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    content11: {
        width: '30%',
        height: 40,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
    },
});
