import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,

} from 'react-native';
import DonHangData from '../cartData';
import { useSelector, useDispatch } from "react-redux"
import { DECREASE_PRODUCT_CART, DELETE_PRODUCT_CART, INCREASE_PRODUCT_CART, SUM_MONEY } from '../redux/actions';
import ConfettiCannon from 'react-native-confetti-cannon';

import Fireworks from "react-native-fireworks";
import { useState } from 'react';

const Item = ({ item }) => {
    const dispatch = useDispatch();
    const handleDeleteProductCart = (ID) => {
        dispatch(DELETE_PRODUCT_CART(ID))
        dispatch(SUM_MONEY())
    }
    const handleDecrease = (ID) => {
        dispatch(DECREASE_PRODUCT_CART(ID))
    }

    const handleIncrease = (ID) => {
        dispatch(INCREASE_PRODUCT_CART(ID))
    }
    return (
        // <TouchableOpacity
        // // onPress={() => navigation.navigate('Category', { itemId: item.id })}
        // >

        <View style={{ alignItems: 'center' }}>
            <View style={styles.backgrProduct}>
                <Image
                    source={{ uri: item.hnlong }}
                    style={styles.imageProduct}
                />
                <View style={{ width: '60%', marginLeft: 20, }}>
                    <Text style={{ fontSize: 25, color: '#005713', top: 5, fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        {/* <TouchableOpacity onPress={() => handleDecrease(item.id)}><Text style={{ fontSize: 20 }}>-</Text></TouchableOpacity> */}
                        {/* <FontAwesome name="minus-circle" size={30} color="#9c5800" /> */}
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginLeft: 10, marginRight: 10 }}> {item.quatity} </Text>
                        {/* <FontAwesome name="plus-circle" size={30} color="#9c5800" />  */}
                        {/* <TouchableOpacity onPress={() => handleIncrease(item.id)}><Text style={{ fontSize: 20 }}>+</Text></TouchableOpacity> */}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: 'blue', textDecorationLine: 'line-through' }}>{item.price}</Text>
                        <Text style={{ fontSize: 20, color: 'green', marginRight: 30, }}>{item.priceKM}</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleDeleteProductCart(item.id)}><Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>Xóa</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        // </TouchableOpacity>

    );
};

const CartFood = ({ navigation }) => {
    const [shoot, setShoot] = useState(false);

    useEffect(() => {
        //Time out to fire the cannon
        setTimeout(() => {
            setShoot(true);
        }, );
    },);

    const handlePress = () => {
        //To fire the cannon again
        Alert.alert(
            "HLONG_food",
            "Hiện tại chưa có sản phẩm nào trong giỏ hàng!",
           
        );
        setShoot(false);
        setTimeout(() => {
            setShoot(true);
        },);
    };
    const cart = useSelector(store => store.HomeReducers.cart)
    const sumMoney = useSelector(store => store.HomeReducers.sumMoney)    // const navigation = useNavigation();
    const amumu = () =>
        Alert.alert(
            "HLONG_food",
            "Hiện tại chưa có sản phẩm nào trong giỏ hàng!",
        );
    const renderItem = ({ item }) => (
        <Item item={item} /> /* render navigation*/
    );
    if (cart.length === 0) {
        return (
            <View style={styles.container}>
                <View style={{ flex: 8 }}>
                    {/* <ImageBackground
                    style={{ flex: 1 }}
                    source={require('../assets/images/long44.jpg')}> */}
                    <TouchableOpacity onPress={handlePress}>

                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain', marginHorizontal: 10, top: 140, right: -250 }}
                            source={require('../assets/images/sosadU.png')}></Image>
                        <Image
                            style={{ width: 350, height: 350, resizeMode: 'contain', marginHorizontal: 40, marginVertical: 80, position: 'relative' }}
                            source={require('../assets/images/amumu.png')}></Image>

                    </TouchableOpacity>
                    {/* </ImageBackground> */}
                    {/* {shoot ?
                        <ConfettiCannon
                            count={200}
                            origin={{ x: -10, y: 0 }}
                        />
                        : null
                    } */}
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                {/* <ImageBackground style={styles.imgBackgr} source={require('./images/imgbackground.png')} > */}
                <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, color: '#005713', top: 5, marginLeft: 20, fontWeight: 'bold' }}>Giỏ hàng</Text>
                </View>
                {
                    cart.length === 0 ? <Text> Không có sản phẩm nào trong giỏ hàng </Text> :
                        <>
                            <FlatList
                                data={cart}
                                numColumns={1}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30 }}>
                                <View style={{ width: '60%', marginLeft: 20, }}>
                                    <Text style={{ fontSize: 25, color: '#005713', top: 5, fontWeight: 'bold' }}>Tổng đơn hàng:</Text>
                                    <Text style={{ fontSize: 20, color: 'green', marginRight: 30, }}>{sumMoney}</Text>
                                </View>
                                <View style={{ marginTop: 15, }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => navigation.navigate('Checkout')}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green', top: 5, marginRight: 8 }}>Thanh toán</Text>
                                        {/* <FontAwesome name="shopping-bag" size={24} color="green" /> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                }
                {/* </ImageBackground> */}
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
    },
    subTitle: {
        fontSize: 16,
    },
    tinyLogo: {
        height: 64,
        width: 64,
    },
    rangeimg: {
        padding: 20,
    },
    head: {
        flex: 1,
        backgroundColor: '#EAFFF2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15,
        // paddingBottom: 15,
    },

    content: {
        flex: 14,
    },
    imgBackgr: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    trai: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    phai: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    home: {
        alignItems: 'center',
        flex: 1,
    },
    imageProduct: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    backgrProduct: {
        backgroundColor: '#fff',
        width: '95%',
        height: 180,
        borderRadius: 25,
        borderColor: 'green',
        shadowColor: '#046613',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 25,
        elevation: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
    },
    button: {
        width: 150,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#FFE350',
        padding: 10,
        borderRadius: 30,
        marginBottom: 10,
        flexDirection: 'row',


    },
});

export default CartFood;
