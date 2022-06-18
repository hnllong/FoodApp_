import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';


import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
const dataCoffee = [
  {
    id: 1,
    images:
      'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png',
    name: 'Phin Sữa Đá',
  },
  {
    id: 2,
    images:
      'https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/thumbs/270_crop_phindi_hanh_nhan_new.png',
    name: 'PHINDI CHOCO',
  },
  {
    id: 3,
    images:
      'https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/phindi_kem_sua_new.png',
    name: 'PHINDI KEM SỮA',
  },
];
const HighlandsCoffee = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{marginLeft: -55}}>
          <Text style={styles.textHeader}>Cùng đón một ngày thú vị nhé!</Text>
        </View>
        <View style={{marginRight: -32}}>
      <TouchableOpacity onPress={() => navigation.navigate('QRcode')}>
          <Image
            style={{height: 30, width: 30, resizeMode: 'contain'}}
            source={require('./assets/images/Sacner.png')}
          />
 </TouchableOpacity>
        </View>
       
      </View>
      <ScrollView>
        <View style={styles.welcome}>
          <ImageBackground
            source={require('./assets/images/bg-welcom.jpg')}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}>
            <View style={styles.boxWelcom}>
              <ImageBackground
                source={require('./assets/images/bg-join.jpg')}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}>
                <View style={styles.boxx}>
                  <View style={{width: '65%', marginLeft: 5, marginTop: 16}}>
                    <Text
                      style={{
                        fontSize: 23,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Chào Bạn!
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 23,
                      width: 23,
                      borderRadius: 20,
                      backgroundColor: '#383838',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View>
                      <Image
                        style={{height: 10, width: 10, resizeMode: 'contain'}}
                        source={require('./assets/images/chevron_big_left.png')}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '75%',
                    marginLeft: 30,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 17, fontWeight: '500'}}>
                    Tham gia chương trình thành viên của Highlands Coffee ngay
                    để tích điểm và nhận phần quà hấp dẫn
                  </Text>
                </View>
                <View style={styles.login}>
                  <View>
                    <Text
                      style={{color: 'red', fontWeight: 'bold', fontSize: 17}}>
                      Đăng Ký / Đăng Nhập
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.register}>
          <View style={styles.regAvartar}>
            <View style={styles.avatarLog}>
              <View style={{height: '100%', width: '100%'}}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    marginHorizontal: -13,
                    marginVertical: -8,
                    resizeMode: 'contain',
                  }}
                  source={require('./assets/images/MobileUX.png')}
                />
              </View>
            </View>
          </View>
          <View style={styles.loggin}>
            <View style={styles.loginTop}>
              <View style={styles.logginOne}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 13,
                    padding: 10,
                  }}>
                  ĐĂNG KÝ TÀI KHOẢN MỚI
                </Text>
              </View>
              <View style={styles.logginTwo}>
                <Image
                  style={{height: 10, width: 10, resizeMode: 'contain'}}
                  source={require('./assets/images/chevron_big_left.png')}
                />
              </View>
            </View>
            <View style={{width: '82%', height: '100%'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  marginLeft: 20,
                  fontWeight: '400',
                }}>
                TẶNG MÃ GIẢM GIÁ 50% CHÀO BẠN MỚI
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.banner}>
          <View style={styles.bannerOne}>
            <View>
              <Text
                style={{
                  marginLeft: 23,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'black',
                }}>
                Ưu Đãi Đặc Biệt Hôm Nay
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginRight: 23,
                  fontSize: 18,
                  color: '#F4A460',
                  fontWeight: '600',
                }}>
                Tất cả
              </Text>
            </View>
          </View>
          <Swiper
            loop
            autoplay
            dot={<View style={{width: 12, height: 12, borderRadius: 5}}></View>}
            activeDot={
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  margin: 5,
                }}></View>
            }>
            <View style={styles.slide1}>
              <ImageBackground
                style={styles.introApp}
                source={require('./assets/images/poster.jpg')}></ImageBackground>
            </View>
            <View style={styles.slide1}>
              <ImageBackground
                style={styles.introApp}
                source={require('./assets/images/poster.jpg')}></ImageBackground>
            </View>
            <View style={styles.slide1}>
              <ImageBackground
                style={styles.introApp}
                source={require('./assets/images/poster.jpg')}></ImageBackground>
            </View>
          </Swiper>
        </View>
        <View style={styles.product}>
          <View style={styles.bannerOne}>
            <View>
              <Text
                style={{
                  marginLeft: 23,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'black',
                  marginTop: -10,
                }}>
                Sản Phẩm Nổi Bật
              </Text>
            </View>
          </View>
          <FlatList
            horizontal={true}
            // style={{width: '100%', height: '100%'}}
            data={dataCoffee}
            renderItem={({item}) => (
              <Products name={item.name} id={item.id} img={item.images} />
            )}
          />
        </View>
        <View style={styles.menu}>
          <View style={styles.menuOne}>
            <View>
              <Text style={styles.txtMenu}>Khám phá toàn bộ Menu nào!</Text>
            </View>
            <View style={styles.menuTwo}>
              <Text style={styles.txtMenuu}>Menu</Text>
            </View>
          </View>
        </View>
        <View style={styles.news}>
          <View style={styles.bannerOne}>
            <View>
              <Text
                style={{
                  marginLeft: 23,
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: 'black',
                }}>
                Tin Tức
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginRight: 23,
                  fontSize: 18,
                  color: '#F4A460',
                  fontWeight: '600',
                }}>
                Tất cả
              </Text>
            </View>
          </View>
          <Swiper
            loop
            autoplay
            dot={<View style={{width: 12, height: 12, borderRadius: 5}}></View>}
            activeDot={
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  margin: 5,
                }}></View>
            }>
            <View style={styles.slide1}>
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  overflow: 'hidden',
                  borderRadius: 12,
                }}
                source={{
                  uri: 'https://www.tiendauroi.com/wp-content/uploads/2020/05/vinid-highlandcofffee-750x422.png',
                }}>
                  <View style={styles.txtView}>
                    <Text style={{ color:'red', fontSize:18}}>Xem Thêm</Text>
                  </View>
                </ImageBackground>
            </View>
          </Swiper>
        </View>
        <View style={styles.end}>
        <Image
                  style={{height: 50, width: 50, resizeMode: 'contain'}}
                  source={require('./assets/images/coffee-cup.png')}
                />
                <Text style={{color:"#606060", fontSize:16, marginTop:5}}>Bản tin đến đây là hết xin cảm ơn!</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const Products = ({name, id, img}) => {
  return (
    <View style={styles.item}>
      <View style={styles.productItem}>
        <Image
          style={{
            height: 200,
            width: 200,
            resizeMode: 'contain',
          }}
          source={{uri: img}}
        />
      </View>
      <Text style={styles.txtProducts}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 70,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  welcome: {
    height: 250,
    width: '100%',
  },
  banner: {
    height: 300,
    width: '100%',
    padding: 5,
    backgroundColor: '#fff'
  },
  register: {
    height: 180,
    width: '100%',
    backgroundColor: '#F5DEB3',

    flexDirection: 'row',
  },
  product: {
    height: 350,
    backgroundColor: '#fff',
  },
  menu: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
  },
  news: {
    height: 300,
    width: '100%',
    backgroundColor: '#fff',
  },
  textHeader: {
    fontSize: 17,
    fontWeight: '400',
    color: '#282828',
    marginLeft:23,
  },
  boxWelcom: {
    height: '85%',
    width: '90%',
    overflow: 'hidden',
    marginHorizontal: 20,
    marginVertical: 18,
    borderRadius: 15,
  },
  boxx: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  login: {
    height: 40,
    width: '48%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginTop: 10,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginLeft: 25,
  },
  regAvartar: {
    width: '38%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLog: {
    width: '65%',
    height: '60%',
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#808080',
    padding: 2,
  },
  loggin: {
    width: '60%',
    height: '100%',
    marginTop: 45,
    marginLeft: -15,
  },
  logginTwo: {
    width: 23,
    height: 23,
    backgroundColor: '#A9A9A9',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTop: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  bannerOne: {
    height: 50,
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slide1: {
    width: '93%',
    height: '95%',
    marginHorizontal: 16,
    marginVertical: 5,
  },
  introApp: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 12,
    resizeMode: 'contain',
  },
  productItem: {
    backgroundColor: '#F5DEB3',
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  item: {
    backgroundColor: '#fff',
    marginLeft: 15,
    width: 170,
    height: 250,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D2B48C',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 2,
    shadowRadius: 16.0,

    elevation: 30,
  },
  txtProducts: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  menuOne: {
    width: '92%',
    height: '100%',
    marginHorizontal: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTwo: {
    width: 120,
    height: 60,
    backgroundColor: '#DC143C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtMenu: {
    fontSize: 18,
    fontWeight: '500',
    color: 'red',
  },
  txtMenuu: {
    fontSize: 19,
    fontWeight: '500',
    color: '#fff',
  },
  end: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  txtView :{
    height:42,
    width:120,
    backgroundColor: '#fff',
    marginTop: 168,
    marginLeft:15,
    borderRadius:15,
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default HighlandsCoffee;
