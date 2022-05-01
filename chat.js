import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    Alert, Modal, Pressable,
    Image, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableHighlight,
    TouchableOpacity, View, ScrollView, ImageBackground, RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Chat({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.tren}>
                    <View style={styles.head1} >                      
                        {/* <AntDesign name="leftcircleo" size={30} color="pink" 
                        onPress={() => navigation.navigate('ChatList')}/> */}
                    </View>
                    <View style={styles.head2}>
                        <Image
                            style={styles.imgBanner}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eYMeJrdf5Fvvk69Ff3rDV0fPvkEodqhDWw&usqp=CAU',
                            }}
                        />
                    </View>
                    <View style={styles.head3}>
                        <Text style={{ color: 'green', fontSize: 20, fontWeight: "bold", paddingRight: 80, }}>_Pizza_</Text>
                        <Text style={{ color: 'black', fontSize: 15, marginTop: 5, }}>Online 10 phút trước</Text>
                    </View>
                    <View style={styles.head4}>
                    <Icon name="chevron-right" size={40} color="orange"  onPress={() => navigation.navigate('ChatList')}/>
                    </View>
                </View>
                <View style={styles.duoi}>
                    <View style={styles.duoi1}>
                        <View style={styles.trai}>
                            <Image
                                style={styles.imgBanner1}
                                source={{
                                    uri: 'https://img.lovepik.com/photo/50071/5098.jpg_wh860.jpg',
                                }}
                            />
                        </View>
                        <View style={styles.giua}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", }}>Pizza săn siêu rẻ</Text>
                            <Text style={{ color: 'red', fontSize: 15, marginTop: 5, }}>15.000đ</Text>
                        </View>
                        <View style={styles.phai}>
                            {/* <AntDesign name="check" size={15} color="green" /> */}
                            <Text style={{ color: 'green', fontSize: 15, }}>Đã gửi link</Text>
                        </View>
                    </View>
                    <View style={styles.duoi2}>
                        <View style={styles.BT}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Trả giá</Text>
                        </View>
                        <View style={styles.BP}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Mua Ngay</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.content}>         
                <ScrollView style={{ flex: 1, width: '100%',paddingTop:10 }}>
                <ImageBackground
            source={require('./assets/images/long44.jpg')}
            resizeMode="cover"
            style={styles.image}>
                <View style={{
                width: '100%', height: 50,
               alignItems:'flex-end',
               flexDirection:'row-reverse',                 
              }}>
                        <View style={styles.content1}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", }}>Halo shop</Text>
                        </View>
                        {/* <AntDesign name="check" size={25} color="green" />             */}
                        <Icon name="check" size={20} color="black"/>
                 </View>
                     <View style={{
                     width: '100%', height: 30,
                     //backgroundColor:'red',
                     alignItems:'flex-end',
                     paddingTop:5,
                     flexDirection:'row-reverse',                 
                     }}>
                   
                          <Text style={{ color: 'black', fontSize: 16,   }}>12:00 01-11-2021</Text>
                          {/* <AntDesign name="clockcircleo" size={20} color="black" />                */}
                     </View>
                 <View style={{
                width: '100%', height: 100,
              // alignItems:'flex-end',
              // flexDirection:'row-reverse',                 
              }}>
                        <View style={styles.content2}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold", paddingRight:20 }}>Cảm ơn bạn đã quan tâm đến shop!
                            Tin nhắn đang bị quá tải, bạn vui lòng chờ ít phút shop sẽ phản hồi nhé ạ ^^</Text>
                        </View>
                                 
                 </View>
                     <View style={{
                     width: '100%', height: 30,
                     //backgroundColor:'red',
                     alignItems:'flex-start',
                     paddingTop:5,
                     flexDirection:'row',               
                     }}>
                         {/* <AntDesign name="clockcircleo" size={20} color="black" />  */}
                          <Text style={{ color: 'black', fontSize: 16,   }}>12:02 01-11-2021</Text>                   
                     </View>
                     <View style={{
                width: '100%', height: 50,
               alignItems:'flex-end',
               flexDirection:'row-reverse',                 
              }}>
                        <View style={styles.content3}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", }}>Shop cho hỏi còn pizza không ạ?</Text>
                        </View>
                        {/* <AntDesign name="check" size={25} color="green" />             */}
                        <Icon name="check" size={20} color="black"/>
                 </View>
                     <View style={{
                     width: '100%', height: 30,
                     //backgroundColor:'red',
                     alignItems:'flex-end',
                     paddingTop:5,
                     flexDirection:'row-reverse',                 
                     }}>
                   
                          <Text style={{ color: 'black', fontSize: 16,   }}>12:03 01-11-2021</Text>
                          {/* <AntDesign name="clockcircleo" size={20} color="black" />                */}
                     </View>
                     <View style={{
                width: '100%', height: 50,
              // alignItems:'flex-end',
              // flexDirection:'row-reverse',                 
              }}>
                        <View style={styles.content4}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold", paddingRight:20 }}>Dạ shop còn bạn muốn đặt loại nào ạ^^
                         </Text>
                        </View>
                                 
                 </View>
                     <View style={{
                     width: '100%', height: 30,
                     //backgroundColor:'red',
                     alignItems:'flex-start',
                     paddingTop:5,
                     flexDirection:'row',               
                     }}>
                         {/* <AntDesign name="clockcircleo" size={20} color="black" />  */}
                          <Text style={{ color: 'black', fontSize: 16,   }}>12:04 01-11-2021</Text>                   
                     </View>
                     <View style={{
                width: '100%', height: 50,
               alignItems:'flex-end',
               flexDirection:'row-reverse',                 
              }}>
                        <View style={styles.content3}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", }}>Cho mình đặt 1 pizza xúc xích và 1 pizza phô mai ạ!</Text>
                        </View>
                        {/* <AntDesign name="check" size={25} color="green" />             */}
                        <Icon name="check" size={20} color="black"/>
                 </View>
                 <View style={{
                     width: '100%', height: 30,
                     //backgroundColor:'red',
                     alignItems:'flex-end',
                     paddingTop:5,
                     flexDirection:'row-reverse',                 
                     }}>
                   
                          <Text style={{ color: 'black', fontSize: 16,   }}>12:05 01-11-2021</Text>
                          {/* <AntDesign name="clockcircleo" size={20} color="black" />                */}
                     </View>
                     <View style={{
                width: '100%', height: 70,
              // alignItems:'flex-end',
              // flexDirection:'row-reverse',                 
              }}>
                        <View style={styles.content5}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold", paddingRight:20 }}>Dạ bạn vui lòng chờ một chút shop sẽ chuẩn bị hàng và ship đến cho bạn ngay ạ^^
                         </Text>
                        </View>
                                 
                 </View>
                     <View style={{
                     width: '100%', height: 30,
                     //backgroundColor:'red',
                     alignItems:'flex-start',
                     paddingTop:5,
                     flexDirection:'row',               
                     }}>
                         {/* <AntDesign name="clockcircleo" size={20} color="black" />  */}
                          <Text style={{ color: 'black', fontSize: 16,   }}>12:05 01-11-2021</Text>                   
                     </View>
                     </ImageBackground>
                </ScrollView>
            </View>
            <View style={styles.last}>
                <View style={styles.last1}>
                 {/* <AntDesign name="pluscircleo" size={30} color="black" /> */}
                 <Icon name="qrcode" size={40} color="orange"/>
                </View>
                <View style={styles.last2}>
                 <Text style={{ color: 'black', fontSize: 16, left:15   }}>Gửi tin nhắn...</Text>   
                </View>
                <View style={styles.last3}>
                    {/* <MaterialCommunityIcons name="emoticon-happy-outline" size={30} color="black" /> */}
                    <Icon name="heart" size={40} color="red"/>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',

    },
    head: {
        paddingTop:20,
        backgroundColor: '#fff',
        width: '100%',
        flex: 4,
        justifyContent: 'center',
        //flexDirection:'row',
        //paddingTop: 20,

    },
    tren: {
        flex: 1.5,
        //backgroundColor: '#29f229',
        alignContent: 'center',
        flexDirection: 'row',
    },
    duoi: {
        paddingTop:10,
        flex: 2.5,
        backgroundColor: 'white',
        width: '100%',
    },
    head1: {
        backgroundColor: 'white',
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head2: {
        backgroundColor: 'white',
        width: '20%',
        height: '100%',
        justifyContent: 'center',
    },
    head3: {
        backgroundColor: 'white',
        width: '40%',
        height: '100%',
        // alignItems:'center',
        justifyContent: 'center',
    },
    head4: {
        backgroundColor: 'white',
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 12,
        // height:'100%',
    },
    last: {
        flex: 1.5,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // paddingLeft: 15,
        // paddingRight: 15,
    },
    last1:{
        width:'15%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    last2:{
        width:'70%',
        height:40,
        backgroundColor:'#fff',
        //alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        paddingRight: 15,
        borderColor:'green', 
        borderWidth:1,
    },
    last3:{
        width:'15%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
    },
    imgBanner: {
        width: 50,
        height: 50,
        borderRadius: 35,
    },
    duoi1: {
        flex: 1.5,
        backgroundColor: 'gray',
        alignContent: 'center',
        flexDirection: 'row',
    },
    duoi2: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        flexDirection: 'row',
    },
    trai: {
        backgroundColor: 'white',
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgBanner1: {
        width: 60,
        height: 60,
        //borderRadius: 35,
    },
    giua: {
        backgroundColor: 'white',
        width: '40%',
        height: '100%',
        // alignItems:'center',
        justifyContent: 'center',
    },
    phai: {
        backgroundColor: 'white',
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 25,
    },
    BT: {
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BP: {
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content1: {
        width:'30%',
        height:50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
       borderRadius:20,
       
    },
    content2: {
        width:'70%',
        height:100,
        backgroundColor: 'pink',
        alignItems:'center',
        justifyContent: 'center',
        //flexDirection:'row',
        borderRadius:20,
        
    },
    content3: {
        width:'50%',
        height:60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
       borderRadius:20,
    },
    content4: {
        width:'50%',
        height:50,
        backgroundColor: 'pink',
        alignItems:'center',
        justifyContent: 'center',
        //flexDirection:'row',
        borderRadius:20,     
    },
    content5: {
        width:'70%',
        height:70,
        backgroundColor: 'pink',
        alignItems:'center',
        justifyContent: 'center',
        //flexDirection:'row',
        borderRadius:20,
        
    },
});