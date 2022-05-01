import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Camnang({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.trai}>
          {/* <AntDesign name="leftcircleo" size={24} color="orange" 
          onPress={() => navigation.navigate('ChatList')}/> */}
          <Icon
            name="chevron-left"
            size={24}
            color="orange"
            onPress={() => navigation.navigate('ChatList')}
          />
        </View>
        <View style={styles.giua}>
          <Text style={{color: 'white', fontSize: 15, marginTop: 5}}>
            Món Mới
          </Text>
        </View>
        <View style={styles.phai}>
          {/* <Entypo name="paypal" size={15} color="orange" /> */}
          <Icon
            name="rocket"
            size={24}
            color="orange"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={{color: 'white', fontSize: 15, marginTop: 5}}>
            Món Phổ Biến
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView style={{width: '100%', backgroundColor: 'black', flex: 1}}>
          <View
            style={{
              width: '100%',
              height: 170,
              borderRadius: 10,
              marginTop: 5, //marginBottom: 15,
              backgroundColor: '#261e1e',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={styles.bt}
              // onPress={() => navigation.navigate('Chitietcamnang1')}
            >
              <View style={styles.tren}>
                {/* <Text style={{ color: 'white', fontSize: 20, marginLeft: 10, fontWeight: "bold", }} 
                 onPress={() => navigation.navigate('Chitietcamnang1')}
                > Pizza Đào</Text> */}
                {/* <FontAwesome5 name="pizza-slice" size={20} color="orange"
                /> */}
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate('Chitietcamnang1')}>
                  {' '}
                  Pizza Đào
                </Text>
                <Icon name="star" size={24} color="orange" />
              </View>
              <View style={styles.giua1}>
                <Image
                  style={styles.imgnd}
                  source={{
                    uri: 'https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg',
                  }}
                />
                <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                  User-one
                </Text>
              </View>
              <View style={styles.duoi}>
                <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
                  bột mì nguyên cám, men, mật ong, nước, bột mì 13, men, dầu
                  olive, muối,...
                </Text>
              </View>
            </View>
            <View style={styles.bp}>
              <Image
                style={styles.imgBanner}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eYMeJrdf5Fvvk69Ff3rDV0fPvkEodqhDWw&usqp=CAU',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 170,
              borderRadius: 10,
              marginTop: 5, //marginBottom: 15,
              backgroundColor: '#261e1e',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.bt}>
              <View style={styles.tren}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate('Chitietcamnang2')}>
                  Bánh Mì Việt Nam
                </Text>
                {/* <Entypo name="cake" size={20} color="orange" /> */}

                <Icon name="star" size={24} color="orange" />
              </View>
              <View style={styles.giua1}>
                <Image
                  style={styles.imgnd}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png',
                  }}
                />
                <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                  User-two
                </Text>
              </View>
              <View style={styles.duoi}>
                <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
                  bột số 13: 450g; Trứng gà: 1 quả; Đường; Muối; Nước; Dấm;
                  Men;...
                </Text>
              </View>
            </View>
            <View style={styles.bp}>
              <Image
                style={styles.imgBanner}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJNsIRvFx159swLNhkjKCFzkav3tqQGXElw&usqp=CAU',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 170,
              borderRadius: 10,
              marginTop: 5, //marginBottom: 15,
              backgroundColor: '#261e1e',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.bt}>
              <View style={styles.tren}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  Đùi Gà Mật Ong
                </Text>
                <Icon name="star" size={24} color="orange" />
              </View>
              <View style={styles.giua1}>
                <Image
                  style={styles.imgnd}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU',
                  }}
                />
                <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                  User-three
                </Text>
              </View>
              <View style={styles.duoi}>
                <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
                  Đùi gà, xì dầu, gia vị lá thơm ý.Dầu hảo, dầu mè, mật ong,...
                </Text>
              </View>
            </View>
            <View style={styles.bp}>
              <Image
                style={styles.imgBanner}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEhf-DDx_I_Mg5P1JhWK9leR32rsqN0k2tQ&usqp=CAU',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 170,
              borderRadius: 10,
              marginTop: 5, //marginBottom: 15,
              backgroundColor: '#261e1e',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.bt}>
              <View style={styles.tren}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  Mỳ Cay Hàn Quốc
                </Text>
                {/* <MaterialCommunityIcons name="noodles" size={20} color="orange" /> */}
                <Icon name="star" size={24} color="orange" />
              </View>
              <View style={styles.giua1}>
                <Image
                  style={styles.imgnd}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kEDK_4Ku1I6-ezlMKBwFYOgJONsmkJnBmA&usqp=CAU',
                  }}
                />
                <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                  User-four
                </Text>
              </View>
              <View style={styles.duoi}>
                <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
                  mì, nước, trứng, thịt heo, hành lá, sau salad, kim chi, tương
                  ớt, dầu hào,...
                </Text>
              </View>
            </View>
            <View style={styles.bp}>
              <Image
                style={styles.imgBanner}
                source={{
                  uri: 'https://i.pinimg.com/originals/a6/51/80/a65180df5d17fb96a4b79e849eff8901.jpg',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 170,
              borderRadius: 10,
              marginTop: 5, //marginBottom: 15,
              backgroundColor: '#261e1e',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.bt}>
              <View style={styles.tren}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  Hamburger
                </Text>
                {/* <FontAwesome5 name="hamburger" size={20} color="orange" />
                
              </View> */}
                <Icon name="star" size={24} color="orange" />
              </View>
              <View style={styles.giua1}>
                <Image
                  style={styles.imgnd}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU',
                  }}
                />
                <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                  User-five
                </Text>
              </View>
              <View style={styles.duoi}>
                <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
                  bánh mì tròn, mì căn, lá thyme khô, muối tiêu, dầu oliu, xà
                  lách,...
                </Text>
              </View>
            </View>
            <View style={styles.bp}>
              <Image
                style={styles.imgBanner}
                source={{
                  uri: 'https://images.foody.vn/images/xac-5-mon-an-nhanh-duoc-ua-chuong-nhat-the-gioi_f413cea463.jpg',
                }}
              />
            </View>
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
    paddingTop: 20,
    backgroundColor: '#261e1e',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  trai: {
    width: '20%',
    height: '100%',
    //backgroundColor:'#EAFFF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  giua: {
    width: '40%',
    height: '100%',
    //backgroundColor:'#EAFFF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phai: {
    width: '40%',
    height: '100%',
    //backgroundColor:'#EAFFF2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    // backgroundColor: '#fff',
    width: '100%',
    flex: 10,
  },

  home: {
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bt: {
    width: '55%',
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
    height: 50,
    //backgroundColor:'white',
  },
  bp: {
    width: '42%',
    height: 160,
    //backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBanner: {
    width: 170,
    height: 150,
    //borderRadius: 50,
  },
  imgnd: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});
