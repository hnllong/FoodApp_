import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert, Modal, Pressable,
  Image, SafeAreaView, StyleSheet,
  Text, TextInput, TouchableHighlight,
  TouchableOpacity, View, ScrollView, ImageBackground, RefreshControl,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhaoHoa from './phaohoa';



export default function Thongbao({navigation}) {

  return (
    // <View style={styles.container}>
    //   <View style={styles.head}>
    //     <View style={styles.trai}>
    //       <Text style={{ color: 'green', fontSize: 30, fontWeight: "bold", }}>Thông Báo</Text>
    //     </View>
    //     <View style={styles.giua}>
    //       {/* <MaterialCommunityIcons name="cart-minus" size={35} color="orange" /> */}
    //       <Icon name="cart-plus" size={40} color="orange"/>
    //     </View>
    //     <View style={styles.phai}>
    //       {/* <FontAwesome5 name="rocketchat" size={30} color="orange" 
    //       onPress={() => navigation.navigate('ChatList')}/> */}
    //        <Icon name="chevron-right" size={20} color="orange"
    //        onPress={() => navigation.navigate('ChatList')} />
    //     </View>
    //   </View>
    //   <View style={styles.content}>
    //     <ScrollView style={{ width: '100%', backgroundColor: '#fff', flex: 1 }}>      
    //       <View style={styles.content1}>
    //         <View style={{
    //           width: '100%', height: 100,
    //           //padding: 10,
    //           //marginTop: 15, //marginBottom: 15,
    //         }}>
    //           <View style={styles.tb}>
    //             <View style={styles.icontb}>
    //               {/* <Ionicons name="gift-outline" size={30} color="orange" /> */}
    //               <Icon name="star" size={26} color="orange"/>
    //             </View>
    //             <View style={styles.txtTB}>
    //               <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }}>Khuyến mãi</Text>
    //               <Text style={{ color: 'black', fontSize: 15, }}>Sản phẩm đồ ăn, đồ uống</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </View>
    //       <View style={styles.content1}>
    //         <View style={{
    //           width: '100%', height: 100,
    //           //padding: 10,
    //           //marginTop: 15, //marginBottom: 15,
    //         }}>
    //           <View style={styles.tb}>
    //             <View style={styles.icontb}>
    //               {/* <MaterialCommunityIcons name="tag-heart" size={30} color="green" /> */}
    //               <Icon name="star" size={26} color="orange"/>
    //             </View>
    //             <View style={styles.txtTB}>
    //               <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }}>FoodApp Live & Feed</Text>
    //               <Text style={{ color: 'black', fontSize: 15, }}>Xem bài đăng của 1hitshop</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </View>
    //       <View style={styles.content1}>
    //         <View style={{
    //           width: '100%', height: 100,
    //           //padding: 10,
    //           //marginTop: 15, //marginBottom: 15,
    //         }}>
    //           <View style={styles.tb}>
    //             <View style={styles.icontb}>
    //               {/* <MaterialIcons name="work-outline" size={30} color="green" /> */}
    //               <Icon name="star" size={26} color="orange"/>
    //             </View>
    //             <View style={styles.txtTB}>
    //               <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }}>Hoạt động</Text>
    //               <Text style={{ color: 'black', fontSize: 15, }}>Pizza đã đánh giá đơn hàng 2121212121QWE11.</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </View>
    //       <View style={styles.content1}>
    //         <View style={{
    //           width: '100%', height: 100,
    //           //padding: 10,
    //           //marginTop: 15, //marginBottom: 15,
    //         }}>
    //           <View style={styles.tb}>
    //             <View style={styles.icontb}>
    //               {/* <MaterialCommunityIcons name="food-fork-drink" size={30} color="red" /> */}
    //               <Icon name="star" size={26} color="orange"/>
    //             </View>
    //             <View style={styles.txtTB}>
    //               <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }}>FoodApp</Text>
    //               <Text style={{ color: 'black', fontSize: 15, }}>Cảm ơn bạn đã sử dụng dịch vụ của FoodApp!!</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </View>
    //       <View style={styles.content2}>
    //         <View style={styles.BT}>
    //           <Text style={{ color: 'red', fontSize: 18, }}>Cập nhật đơn hàng</Text>
    //         </View>
    //         <View style={styles.BP}>
    //           <Text style={{ color: 'orange', fontSize: 18, }}>Đọc tất cả (1)</Text>
    //         </View>
    //       </View>
    //       <ScrollView style={{ width: '100%', backgroundColor: '#fff', flex: 1 }}>
    //       <ImageBackground
    //         source={require('./assets/images/long44.jpg')}
    //         resizeMode="cover"
    //         style={styles.image}>
    //         <View style={styles.content3}>
    //           <View style={{
    //             width: '100%', height: 100,
    //             padding: 10,
    //             //marginTop: 15, //marginBottom: 15,
    //           }}>
    //             <View style={styles.tb3}>
    //               <View style={styles.icontb3}>
    //                 <Image
    //                   style={styles.imgBanner}
    //                   source={{
    //                     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN6XNQfVmp5Moj81O_wuop5YLdQDK_XKP2g&usqp=CAU',
    //                   }}
    //                 />
    //               </View>
    //               <View style={styles.txtTB3}>
    //                 <Text style={{ color: 'black', fontSize: 16, fontWeight: "bold" }}>Đánh giá sản phẩm</Text>
    //                 <Text style={{ color: 'black', fontSize: 15, }}>Pizza đã đánh giá đơn hàng 2121212121QWE11.Vui lòng đánh giá sản phẩm trước ngày 01-12-2021 </Text>
    //                 <Text style={{ color: 'black', fontSize: 15 }}>07:25 29-11-2021</Text>
    //               </View>
    //             </View>
    //           </View>
    //           </View>
    //           <View style={styles.content3}>
    //             <View style={{
    //               width: '100%', height: 100,
    //               padding: 10,
    //               //marginTop: 15, //marginBottom: 15,
    //             }}>
    //               <View style={styles.tb3}>
    //                 <View style={styles.icontb3}>
    //                   <Image
    //                     style={styles.imgBanner}
    //                     source={{
    //                       uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN6XNQfVmp5Moj81O_wuop5YLdQDK_XKP2g&usqp=CAU',
    //                     }}
    //                   />
    //                 </View>
    //                 <View style={styles.txtTB3}>
    //                   <Text style={{ color: 'black', fontSize: 16, fontWeight: "bold" }}>Giao kiện hàng thành công </Text>
    //                   <Text style={{ color: 'black', fontSize: 15, }}>Kiện hàng QWERT của đơn hàng 2121212121QWE11 đã giao thành công đến bạn </Text>
    //                   <Text style={{ color: 'black', fontSize: 15 }}>11:11 29-11-2021</Text>
    //                 </View>
    //               </View>
    //             </View>
    //           </View>
    //           <View style={styles.content3}>
    //         <View style={{
    //           width: '100%', height: 100,
    //           padding: 10,
    //           //marginTop: 15, //marginBottom: 15,
    //         }}>
    //           <View style={styles.tb3}>
    //             <View style={styles.icontb3}>
    //               <Image
    //                         style={styles.imgBanner}
    //                         source={{
    //                             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN6XNQfVmp5Moj81O_wuop5YLdQDK_XKP2g&usqp=CAU',
    //                         }}
    //                     />
    //             </View>
    //             <View style={styles.txtTB3}>
    //               <Text style={{ color: 'black', fontSize: 16, fontWeight: "bold" }}>Đã xác nhận thanh toán</Text>
    //               <Text style={{ color: 'black', fontSize: 15, }}>Đơn hàng 2121212121QWE11 đã được xác nhận.Vui lòng kiểm tra thời gian nhận hàng </Text>
    //               <Text style={{ color: 'black', fontSize: 15 }}>11:15 29-11-2021</Text>
    //             </View>
    //           </View>
    //         </View>
    //         </View>

    //         </ImageBackground>
    //       </ScrollView>
        
    //     </ScrollView>
    //   </View>
     
    // </View>
    <PhaoHoa/>

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
    backgroundColor: '#fff',
    width: '100%',
    flex: 1.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  trai: {
    //backgroundColor:'white',
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phai: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  giua: {
    //backgroundColor:'white',
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    //backgroundColor: 'white',
    width: '100%',
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    flex: 1.5,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //paddingLeft: 15,
    //paddingRight: 15,
  },

  home: {
    alignItems: 'center',
    flex: 1,
  },

  content1: {
    //flex: 1,
    // backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginBottom: 15,
  },

  tb: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'yellow',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icontb: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'white',
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
  },
  txtTB: {
    width: '80%',
  },
  content2: {

    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BT: {
    width: '50%',
    justifyContent: 'center',
  },
  BP: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  content3: {
    //flex: 1,
    // backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 15,
  },
  tb3: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'pink',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icontb3: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'white',
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
  },
  txtTB3: {
    width: '80%',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // width:'100%',
  },
  imgBanner: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
