import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Chuyen } from "../myScreen/Profile.js";
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Image, StyleSheet,
    Text, View, ScrollView, ImageBackground, TouchableOpacity,

} from 'react-native';
import PhaoHoa from '../phaohoa';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <ImageBackground style={{ flex: 1 }}
                source={require('../assets/images/long44.jpg')}>
                <View style={styles.profileSale}>
                    <Text style={styles.txtSale}>12.12 Siêu Sale Food App 50%</Text>
                    <Text style={styles.txtsaleNew}>New</Text>
                </View>
                <View style={styles.profileVouncher}>
                    <View style={styles.VouncherItem}>
                        <View style={[styles.VouncherColor, styles.VouncherColor1]}>
                            <Icon style={styles.iconVouncher} name="heart" />
                        </View>
                        <Text style={styles.txtVouncher}>Yêu thích</Text>
                    </View>
                    <View style={styles.VouncherItem}>
                        <View style={[styles.VouncherColor, styles.VouncherColor2]}>
                            <Icon style={styles.iconVouncher} name="qrcode" />
                        </View>
                        <Text style={styles.txtVouncher}>Vouncher</Text>
                    </View>
                    <View style={styles.VouncherItem}>
                        <View style={[styles.VouncherColor, styles.VouncherColor3]}>
                            <Icon style={styles.iconVouncher} name="truck" />
                        </View>
                        <Text style={styles.txtVouncher}>Free ship</Text>
                    </View>
                    <View style={styles.VouncherItem}>
                        <View style={[styles.VouncherColor, styles.VouncherColor4]}>
                            <Icon style={styles.iconVouncher} name="apple-pay" />
                        </View>
                        <Text style={styles.txtVouncher}>Mã giảm</Text>
                    </View>
                </View>
                <View style={{ marginTop: 60 }}>
                    <View style={styles.listItem}>
                        {/* <FontAwesome5 name="history" size={18} color="#bf5a1b" /> */}
                        <Text style={{ fontSize: 16, marginLeft: 10 }}> Lịch sử mua hàng</Text>
                    </View>
                    <View style={styles.listItem}>
                        {/* <AntDesign name="book" size={18} color="orange" /> */}
                        <Text style={{ fontSize: 16, marginLeft: 10 }}> Kho voucher</Text>
                    </View>
                    <View style={styles.listItem}>
                        {/* <AntDesign name="heart" size={18} color="pink" /> */}
                        <Text style={{ fontSize: 16, marginLeft: 10 }}> Món ăn đã thích</Text>
                    </View>
                    <View style={styles.listItem}>
                        {/* <Ionicons name="settings-outline" size={18} color="black" /> */}
                        <Text style={{ fontSize: 16, marginLeft: 10 }}> Thiết lập tài khoản</Text>
                    </View>
                    <View style={styles.listItem}>
                        {/* <MaterialIcons name="contact-support" size={18} color="green" /> */}
                        <Text style={{ fontSize: 16, marginLeft: 10 }}> Trợ giúp</Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        style={{ flex: 1, alignItems: 'center' }}
        source={require('../assets/images/long44.jpg')}>

        <View style={{ marginTop: 50, alignItems: 'center' }}>


          <View style={styles.hang}>
            {/* <FontAwesome name="map-marker" size={24} color="black" style={{ marginRight: 10, marginLeft: 20 }} /> */}
            <View style={styles.viewText1}>
              <Text style={styles.txtTT}>Địa chỉ:</Text>
            </View>

            <View style={styles.viewText2}>
              <Text style={styles.txtTT}>
                 {/* {diachi} */}
                Đông Anh,HN
                </Text>
            </View>
          </View>
          <View style={styles.hang}>
            {/* <Feather name="phone-call" size={24} color="black" style={{ marginRight: 10, marginLeft: 20 }} /> */}
            <View style={styles.viewText1}>
              <Text style={styles.txtTT}>Số điện thoại:</Text>
            </View>
            <View style={styles.viewText2}>
              <Text style={styles.txtTT}>
                {/* {sdt} */}
                0337521915
                </Text>
            </View>
          </View>
          <View style={styles.hang}>
            {/* <MaterialIcons name="email" size={24} color="black" style={{ marginRight: 10, marginLeft: 20 }} /> */}
            <View style={styles.viewText1}>
              <Text style={styles.txtTT}>Email:</Text>
            </View>
            <View style={styles.viewText2}>
              <Text style={styles.txtTT}> 
              {/* {email} */}
                huyen@gmail.com
                </Text>
            </View>
          </View>
          <View style={{ width: '100%',  }}>
            <TouchableOpacity
              style={styles.buttonSetting}
            >
              {/* <Ionicons name="settings-sharp" size={24} color="green" /> */}
              <Text
                style={{
                  fontSize: 18,
                  fontStyle: 'italic',
                  color: 'green',
                  marginLeft:5,
                }}
                onPress={() => navigation.navigate('Settings')}
              >
                Thay đổi thông tin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    </View>
   
    );
}


export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.tren}>
                    <ImageBackground
                        style={{ flex: 1 }}
                        source={require('../assets/images/nenfb.png')}>
                    </ImageBackground>
                </View>
                <View style={styles.duoi}>
                    <View style={styles.imgUser}>
                        <Image
                            style={styles.imageUser}
                            source={require('../assets/images/long3.jpg')}
                        />
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', fontStyle: "italic", marginTop: 50 }}>Hoàng Ngọc Long</Text>
                        <View style={{
                            justifyContent: 'center', width: 130, height: 30,
                            backgroundColor: '#4ca655', borderRadius: 15, paddingLeft: 10, marginVertical: 5
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Thành viên bạc</Text>
                            {/* <MaterialIcons name="navigate-next" size={24} color="black" style={{ position: 'absolute', right: 0 }} /> */}
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.content}>
                <Tab.Navigator  screenOptions={{
                     tabBarActiveTintColor: 'black',
          // tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: '#EAFFF2' },
        }}>
                    <Tab.Screen name="Mua Hàng" component={HomeScreen} />
                    <Tab.Screen name="Thông Tin Cá Nhân" component={SettingsScreen} />
                </Tab.Navigator>
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
        backgroundColor: '#fff',
        width: '100%',
        flex: 5,
    },
    content: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 6,
    },

    tren: {
        flex: 4,
        //backgroundColor: '#daf2dc',
        width: '100%',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        flexDirection: 'row',
        // paddingBottom: 10,
        // paddingRight: 10,
    },
    duoi: {
        flex: 2,
        flexDirection: 'row',
    },
    inforUser: {
        flex: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        padding: 15,
    },
    imgUser: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAFFF2'
    },
    imageUser: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: 'absolute',
        top: -70,
        borderWidth: 4,
        borderColor: '#fff',
    },
    home: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    infor: {
        marginTop: 50,
    },
    inforChild: {
        flexDirection: 'row',
        height: 60,
        borderBottomColor: '#111',
        borderBottomWidth: 0.5,
        borderBottomColor: '#4ca655',

    },
    listItem: {
        flexDirection: 'row',
        height: 40,
        borderBottomColor: '#111',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        paddingLeft: 15,
        alignItems: 'center',
        borderColor: '#4ca655',
        borderBottomColor: '#4ca655',
    },
    profileTitle: {
        backgroundColor: '#EAFFF2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtTitleLeft: {
        paddingVertical: 15,
        width: '50%',
        borderBottomWidth: 3,
        borderBottomColor: '#00623B',
    },
    txtTitleRight: {
        paddingVertical: 15,
        paddingVertical: 15,

        width: '50%',
    },
    txtTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        fontWeight: '400',
    },
    //
    profileSale: {
        marginLeft: 5,
        marginTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtSale: {
        color: '#EA384D',
        marginRight: 10,
        fontSize: 16,
    },
    txtsaleNew: {
        backgroundColor: '#00623B',
        color: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 7,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 14,
    },
    //
    profileVouncher: {
        marginTop: 20,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    VouncherItem: {
        width: 70,
        height: 50,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    VouncherColor: {
        width: 62,
        height: 62,
        lineHeight: 64,
        textAlign: 'center',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    VouncherColor1: {
        borderRadius: 100,
        backgroundColor: '#ffa751',
    },
    VouncherColor2: {
        backgroundColor: '#ec008c',
    },
    VouncherColor3: {
        backgroundColor: '#5433FF',
    },
    VouncherColor4: {
        backgroundColor: '#2193b0',
    },
    iconVouncher: {
        fontSize: 35,

        color: '#ffff',
    },
    txtVouncher: {
        marginTop: 5,
        color: '#333',
        fontSize: 15,
    },
    //
    profileCart: {
        margin: 20,
    },
    profileCartTitle: {
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
    },
    iconCartTitle: {
        fontSize: 30,
        marginRight: 10,
    },
    txtCartD: {
        fontSize: 18,
    },
    hang: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        borderBottomWidth: 0.4,
        borderBottomColor: 'green',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
      },
      txtTT: {
        fontSize: 20,
      },
      viewText1: {
        width: '40%',
    
      },
      viewText2: {
        width: '60%',
    
      },
      buttonSetting: {
        width: 200,
        height: 60,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 15,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        shadowColor: '#046613',
        shadowOpacity: 0.8,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 25,
        elevation: 20,
        flexDirection:'row',
    
      }
});

