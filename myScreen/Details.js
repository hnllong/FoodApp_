import * as React from 'react';
import { useState } from 'react';
import {
    Image, StyleSheet,
    Text,
    TouchableOpacity, View, ScrollView, ImageBackground, _ScrollView, TextInput, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NX from '../comments';
import { useDispatch } from "react-redux"
import { ADD_CART, SUM_MONEY } from '../redux/actions';
import { useEffect } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';

const Details = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const products = route.params;// nhận dữ liệu 
    const [count, setCount] = useState(1);
    const handleCountMin = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleCountMax = () => {
        setCount(count + 1);
    };
    const handleAddCart = (item) => {
        dispatch(ADD_CART(item))
        dispatch(SUM_MONEY())
    }
    const [shoot, setShoot] = useState(false);

    useEffect(() => {
        //Time out to fire the cannon
        setTimeout(() => {
            setShoot(false);
        }, 1000);
    },[]);

    const handlePress = () => {
        //To fire the cannon again
        Alert.alert(
            "HLONG_food",
            "Cảm ơn quý khách đã đánh giá !");
        setShoot(false);
        setTimeout(() => {
            setShoot(true);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.trai}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/images/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, top: 2 }}>Back</Text>
                </View>
                <View style={styles.phai}>
                    <Image
                        source={require('../assets/images/search.png')}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <ImageBackground source={require('../assets/images/long44.jpg')} style={styles.image}>
                    <ScrollView style={{ width: '100%', flex: 1 }}>
                    {/* {shoot ?
                            <ConfettiCannon
                                count={200}
                                origin={{ x: -10, y: 0 }}
                            />
                            : null
                        } */}
                        <ScrollView horizontal={true} >
                            <View style={{ height: 400, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={styles.backgrProduct}>
                                    <Image
                                        style={{ height: 300, width: 370 }}
                                        source={{ uri: products.hnlong }}
                                    />

                                </View>
                                <View style={styles.backgrProduct}>

                                    <Image
                                        style={{ height: 300, width: 370 }}
                                        source={{ uri: products.hnlong }}
                                    />

                                </View>
                                <View style={styles.backgrProduct}>
                                    <Image
                                        style={{ height: 300, width: 370 }}
                                        // source={products.hnlong}
                                        source={{ uri: products.hnlong }}
                                    />

                                </View>
                            </View>
                        </ScrollView>
                        <View style={{
                            width: 190, height: 130, backgroundColor: '#38FF87',
                            position: 'absolute', left: 0, top: 280,
                            borderTopRightRadius: 70,
                            borderBottomRightRadius: 70,
                        }}>
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 30, textAlign: 'center' }}>{products.sale}</Text>
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>{products.offer}</Text>
                        </View>
                        <View style={{ width: '100%', marginLeft: 20 }}>
                            <Text style={{ fontSize: 45, marginTop: 30, fontWeight: 'bold', color: 'black' }}>{products.name}</Text>
                            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Giá chỉ từ: </Text>
                            <Text style={{ fontSize: 25, color: 'red', textDecorationLine: 'line-through' }}>{products.price}</Text>
                            <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'green' }}>{products.priceKM}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5, height: 50, width: 120, alignItems: 'center', justifyContent: 'space-around', borderRadius: 30, marginLeft: -2, backgroundColor: '#fff' }}>
                                <View >
                                    <TouchableOpacity onPress={handleCountMin}>
                                        <Icon name="minus-circle" size={30} color="green" />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}> {count}</Text></View>
                                <View>
                                    <TouchableOpacity onPress={handleCountMax}>
                                        <Icon name="plus-circle" size={30} color="green" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ width: '100%', position: 'absolute', alignItems: 'flex-end', right: 35, marginTop: 100 }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => handleAddCart({ ...products, quatity: count })}
                                >
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', top: 5, right: 5 }}>THÊM VÀO GIỎ</Text>
                                    <Icon name="cart-plus" size={32} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                >
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', top: 5, right: 8 }}>MUA NGAY</Text>
                                    <Icon name="bitcoin" size={32} color="#fff" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ width: '90%', marginTop: 25, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 19 }}>Mô tả: </Text>
                            <Text style={{ fontSize: 18, marginLeft: 19, color: 'black' }}>{products.noidung} </Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 15, marginTop: 20 }}> Đánh Giá :</Text>
                            <NX />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 15, marginTop: 20 }}> Nhận xét :</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Thêm nhận xét của bạn ...."
                                keyboardType="default"
                            />
                        </View>
                        <TouchableOpacity>
                            <View
                                style={{
                                    marginVertical: 20,
                                    marginHorizontal: 120,
                                    backgroundColor: 'green',
                                    width: '50%',
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        padding: 10,
                                        textAlign: 'center',
                                    }}
                                    onPress={handlePress}>

                                    Xác Nhận
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </ImageBackground>
            </View>
            {/* <View style={styles.last}>
                <View>
                    <Icon name="home" size={32} color="#333333" />
                </View>
                <View>
                    <Icon name="trophy" size={32} color="#333333" />
                </View>
                <View>
                    <Icon name="comment" size={32} color="#333333" />
                </View>
                <View>
                    <Icon name="cart-plus" size={32} color="#333333" />
                </View>
                <View>
                    <Icon name="user-circle-o" size={32} color="#333333" />
                </View>

            </View> */}

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
        backgroundColor: '#EAFFF2',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    content: {
        width: '100%',
        flex: 15,
    },
    last: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        // justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
    },


    image: {
        flex: 15,
    },

    trai: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    phai: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    backgrProduct: {
        backgroundColor: '#fff',
        marginHorizontal: 35,
        width: 370,
        height: 30,
        borderRadius: 25,
        borderColor: 'green',
        shadowColor: '#046613',
        shadowOpacity: 0.9,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 25,
        elevation: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        width: 200,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
        padding: 10,
        borderRadius: 30,
        marginBottom: 10,
        flexDirection: 'row',

    },
    home: {
        alignItems: 'center',
        flex: 1,
    },
    input: {
        height: 50,
        borderBottomWidth: 1,
        marginLeft: 15,

    }
});
export default Details;