import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {

  Image, SafeAreaView, StyleSheet,
  Text,
  TouchableOpacity, View, ScrollView, ImageBackground, RefreshControl,
} from 'react-native';
// import {
//   AntDesign, MaterialCommunityIcons,
//   Entypo, SimpleLineIcons
// } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
export default function ChatList({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.tren}>
          <View style={styles.trai}>
            <Text style={{ color: 'green', fontWeight: "bold", fontSize: 30, marginTop: 5, }}>Tin Nhắn</Text>
          </View>
          <View style={styles.phai}>
            <Icon name="broom" size={23} color="#4632A1"
              style={{ marginTop: 20 }} />
            <Text style={{ color: '#ff00ff', fontSize: 20, marginTop: 18 }}>Đánh dấu đã đọc</Text>
          </View>
        </View>
        <View style={styles.duoi}>
          <View style={styles.duoi1}>
            <View style={styles.giua1}>
              <Icon1 name="comment" size={25} color="#fff"
                style={{}} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <Text style={{ color: 'black', fontSize: 15, marginTop: 5, fontWeight: "bold" }}>Trò chuyện</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.duoi2}>
            <View style={styles.giua2}>
              <Icon name="wallet" size={25} color="#fff" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Camnang')}>
              <Text style={{ color: 'black', fontSize: 15, marginTop: 5, fontWeight: "bold" }}>Cẩm nang</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.duoi3}>
            <View style={styles.giua3}>
              <Icon name="bell" size={25} color="#fff"
              //   onPress={() => navigation.navigate('Thongbao')}
              />
            </View>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 5, fontWeight: "bold" }} onPress={() => navigation.navigate('Thongbao')}>Thông báo</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView style={{ flex: 1, width: '100%', }}>
          <ImageBackground
            source={require('../assets/images/long44.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.content1}>
              <View style={{
                width: '100%', height: 170,
                borderRadius: 30,
                padding: 10,
                marginTop: 15, marginBottom: 15,
              }}>
                <View style={styles.tb}>
                  <View style={styles.icontb}>
                    <Icon name="rocket" size={25} color="#fff" />
                  </View>
                  <View style={styles.txtTB}>
                    <Text style={{ color: 'white', fontSize: 18, }}>Deal tốt dành riêng cho bạn</Text>
                    <Text style={{ color: 'red', fontSize: 15, }}>15:22 AM</Text>
                  </View>
                </View>
                <View style={styles.dau1}>
                  <View style={styles.con1}>
                    <Image
                      style={styles.imgBanner}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eYMeJrdf5Fvvk69Ff3rDV0fPvkEodqhDWw&usqp=CAU',
                      }}
                    />
                  </View>
                  <View style={styles.con2}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }} onPress={() => navigation.navigate('Chat')}>_Pizza_ </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginTop: 5, }}>Đừng bỏ lỡ chương trình khuyến mãi của Pizza</Text>
                  </View>
                </View>
              </View>
              <View style={{
                width: '100%', height: 170,
                borderRadius: 30,
                padding: 10,
                marginTop: 15,
                marginBottom: 15,
              }}>
                <View style={styles.tb}>
                  <View style={styles.icontb}>
                    <Icon name="rocket" size={25} color="#fff" />
                  </View>
                  <View style={styles.txtTB}>
                    <Text style={{ color: 'white', fontSize: 18, }}>SALE kịch liệt</Text>
                    <Text style={{ color: 'red', fontSize: 15, }}>20:20 AM</Text>
                  </View>
                </View>
                <View style={styles.dau1}>
                  <View style={styles.con1}>
                    <Image
                      style={styles.imgBanner}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJNsIRvFx159swLNhkjKCFzkav3tqQGXElw&usqp=CAU',
                      }}
                    />
                  </View>
                  <View style={styles.con2}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }}>_Bread_</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginTop: 5, }}>Duy nhất khung giờ vàng: 20:20H Ngày 24-11-2021</Text>
                  </View>
                </View>

              </View>
              <View style={{
                width: '100%', height: 170,
                borderRadius: 30,
                padding: 10,
                marginTop: 15, marginBottom: 15,
              }}>
                <View style={styles.tb}>
                  <View style={styles.icontb}>
                    <Icon name="rocket" size={25} color="#fff" />
                  </View>
                  <View style={styles.txtTB}>
                    <Text style={{ color: 'white', fontSize: 18, }}>Vận may của bạn đây!</Text>
                    <Text style={{ color: 'red', fontSize: 15, }}>12:00 AM</Text>
                  </View>
                </View>
                <View style={styles.dau1}>
                  <View style={styles.con1}>
                    <Image
                      style={styles.imgBanner}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEhf-DDx_I_Mg5P1JhWK9leR32rsqN0k2tQ&usqp=CAU',
                      }}
                    />
                  </View>
                  <View style={styles.con2}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: "bold" }}>_Chicken thighs_</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginTop: 5, }}>Giỏ hàng đã sẵn sàng</Text>
                  </View>
                </View>

              </View>

            </View>
          </ImageBackground>
        </ScrollView>
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
    backgroundColor: '#fff',
    width: '100%',
    flex: 4,
    justifyContent: 'center',
    paddingTop: 20,
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 12,
  },

  tren: {
    flex: 1,
    //backgroundColor: '#29f229',
    alignContent: 'center',
    flexDirection: 'row',
  },
  duoi: {
    flex: 1,
    backgroundColor: '#EAFFF2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  trai: {
    width: '30%',
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phai: {
    width: '70%',
    //backgroundColor: 'white',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  duoi1: {
    //backgroundColor: 'white',
    width: '30%',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10,
    justifyContent: 'center',
  },
  giua1: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  duoi2: {
    width: '40%',
    height: '100%',
    //backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center',
  },
  giua2: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  duoi3: {
    width: '30%',
    height: '100%',
    //backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center',
  },
  giua3: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  content1: {
    flex: 1,
    // backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    alignItems: 'center',

  },
  dau1: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#fff',
    paddingBottom: 5,
    paddingRight: 5,
    shadowColor: '#046613',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
  },
  con1: {
    width: '30%',
    // backgroundColor: 'white',
    alignItems: 'center',
  },
  con2: {
    width: '70%',
    // backgroundColor: 'white',
    justifyContent: 'center',

  },

  imgBanner: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  tb: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'pink',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  icontb: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f90c7f',
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
  },
  txtTB: {
    width: '80%',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // width:'100%',
  }

});
