import React, {useEffect, useState} from 'react';

import Swiper from 'react-native-swiper';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  Pressable,
} from 'react-native';
//import Login from "./Login";
import Modal from 'react-native-modal';
import arr_food from '../ManyProduct';
import axios from 'axios';
import {getProducts} from '../Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeModal from '../QuangCao';
const HomeFood = ({navigation}) => {
  // const [FoodActive, setFoodActive] = useState(arr_food[0]);
  const [FoodActive, setFoodActive] = useState([]);
  const [ListProducts, setListProducts] = useState([]);
  const [modalIsvisible, setModalIsvisible] = useState(false);
  const handeActive = item => {
    setFoodActive(item);
  };
  useEffect(() => {
    getProducts()
      .then(function (response) {
        console.log(response.data);
        setFoodActive(response.data[0]);
        setListProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <HomeModal />
      <View style={styles.header}>
        <Pressable onPress={() => setModalIsvisible(true)}>
          <View style={styles.header1}>
            <Image source={require('../assets/images/vector.png')} />
          </View>
        </Pressable>
        <View style={styles.modalmenu}>
          <Modal
            //  animationType="slide"
            //  transparent={false}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            isVisible={modalIsvisible}
            backdropColor="black"
            backdropOpacity={0.9}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalIsvisible(!modalIsvisible);
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                // source={require('../assets/images/long3.jpg')}
              />
              <Pressable onPress={() => setModalIsvisible(!modalIsvisible)}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 120,
                    height: 80,
                    position: 'absolute',
                    right: 258,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -402,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>
                      <Icon name="home" size={40} />
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Trang Chủ
                    </Text>
                  </View>
                </View>
              </Pressable>
              <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 120,
                    height: 80,
                    position: 'absolute',
                    right: 180,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -320,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>
                      <Icon name="android" size={40} />
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Giới thiệu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 120,
                    height: 80,
                    position: 'absolute',
                    right: 140,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -215,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>
                      <Icon name="phone" size={40} />
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Hỗ Trợ
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Camnang')}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 120,
                    height: 80,
                    position: 'absolute',
                    right: 175,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -110,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>
                      <Icon name="book" size={40} />
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cẩm nang
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 120,
                    height: 80,
                    position: 'absolute',
                    right: 260,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -10,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>
                      <Icon name="sign-out" size={40} />
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Đăng xuất
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={styles.header2}>
          <Image
            style={styles.imgheader}
            source={require('../assets/images/long3.jpg')}
          />
        </View>
      </View>
      <View style={styles.banner}>
        <Swiper
          style={styles.wrapper}
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
              source={require('../assets/images/banner16.png')}></ImageBackground>
          </View>
          <View style={styles.slide2}>
            <Image
              style={styles.introApp}
              source={require('../assets/images/banner15.png')}
            />
          </View>
          <View style={styles.slide3}>
            <ImageBackground
              style={styles.introApp1}
              source={require('../assets/images/banner13.png')}></ImageBackground>
          </View>
        </Swiper>
      </View>
      <View style={styles.searchFood}>
        <Image
          style={styles.noel}
          source={require('../assets/images/noel.png')}
        />
        <View style={styles.searchFood1}>
          <TextInput
            style={styles.input}
            placeholder="Find the right food for you..."
            keyboardType="default"
          />
          <Image
            style={styles.searchFood2}
            source={require('../assets/images/search.png')}
          />
        </View>
      </View>
      <View style={styles.categoryFood}>
        <View style={styles.categoryFood1}>
          {ListProducts?.map(val => (
            <TouchableOpacity onPress={() => handeActive(val)} key={val.id}>
              <Image
                style={{
                  width: val.id === FoodActive.id ? 78 : 50,
                  height: val.id === FoodActive.id ? 78 : 50,
                }}
                source={{uri: val.image}}
              />
            </TouchableOpacity>
          ))}
          {/* <TouchableOpacity>
                        <View>
                            <Image
                                source={require('../assets/images/menu.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Image
                                source={require('../assets/images/menu2.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Image
                                source={require('../assets/images/menu3.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Image
                                source={require('../assets/images/menu4.png')}
                            />
                        </View>
                    </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.products}>
        <ImageBackground
          style={{flex: 8}}
          source={require('../assets/images/long44.jpg')}>
          <FlatList
            style={{width: '100%', height: '100%'}}
            data={FoodActive?.data}
            numColumns={1}
            renderItem={({item}) => (
              <Products
                name={item.name}
                price={item.gia}
                navigation={navigation}
                priceKM={item.giaKM}
                hnlong={item.image}
                sale={item.text1}
                offer={item.text2}
                noidung={item.conten}
                id={item.id}
              />
            )}
            keyExtractor={item => item.id}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

const Products = ({
  name,
  price,
  navigation,
  priceKM,
  hnlong,
  sale,
  offer,
  noidung,
  id,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detalis', {
          name,
          price,
          hnlong,
          priceKM,
          sale,
          offer,
          noidung,
          id,
        })
      }>
      <View style={styles.products1}>
        <View style={styles.products11}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                marginHorizontal: 20,
                marginVertical: 0.5,
                color: 'black',
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 23,
                color: '#59C885',
                marginVertical: 5,
                marginHorizontal: 15,
              }}>
              {price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              width: '100%',
              left: '-20%',
              zIndex: 9,
            }}>
            <View style={styles.products12}>
              <Text
                style={{fontWeight: 'bold', fontSize: 30, color: '#FFFFFF'}}>
                {sale}
              </Text>
              <Text style={{fontWeight: 'bold', color: 'white'}}>{offer}</Text>
            </View>
            <View style={styles.products13}>
              <Image
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: 'contain',
                  borderRadius: 200,
                }}
                source={{uri: hnlong}}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#EAFFF2',
  },
  header1: {
    height: 50,
    width: 50,
    backgroundColor: '#FFE4E1',
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
  imgheader: {
    height: 47,
    width: 47,
    borderRadius: 28,
  },

  banner: {
    flex: 5,
  },
  slide1: {
    flex: 4,
  },
  introApp: {
    width: '100%',
    height: '100%',
  },
  slide2: {
    flex: 3,
  },
  introApp1: {
    width: '100%',
    height: '100%',
  },
  slide3: {
    flex: 3,
  },
  searchFood: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EAFFF2',
  },
  searchFood1: {
    height: 46,
    width: 350,
    backgroundColor: '#EAFFF2',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#32C910',
    marginRight: 25,
  },
  input: {
    position: 'absolute',
    borderColor: 'green',
  },
  searchFood2: {
    position: 'relative',
    marginLeft: 290,
  },
  noel: {
    height: 70,
    width: 70,
  },
  categoryFood: {
    flex: 2,
    backgroundColor: '#EAFFF2',
  },
  categoryFood1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 1,
    alignItems: 'center',
    flex: 2,
  },
  products: {
    flex: 8,
  },
  products1: {
    flex: 2.5,
    flexDirection: 'column',
    //marginVertical: 28,
    marginTop: 50,
  },
  products11: {
    width: 340,
    height: 245,
    marginHorizontal: 50,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    justifyContent: 'flex-end',
    shadowColor: '#05F05F',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 20,
  },
  products12: {
    width: 213,
    height: 140,
    backgroundColor: '#33FF84',
    position: 'relative',
    borderTopEndRadius: 80,
    borderBottomEndRadius: 80,
    marginVertical: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  products13: {
    width: 244,
    height: 227,
    position: 'relative',
    //marginVertical: -30,
    //marginHorizontal: -10,
    marginLeft: 25,
    marginTop: -30,
  },
  Flist: {
    flex: 8,
  },
  // tabFood: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     padding: 5,
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     alignItems: 'center',
  // },
  modalmenu: {
    flex: 1,
  },
});
export default HomeFood;
