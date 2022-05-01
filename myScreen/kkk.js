import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const imageBg = require('../../assets/images/profileb.jpg');
const Profile = () => {
    return (
        <>
            <View style={styles.profileApp}>
                <ImageBackground source={imageBg} style={styles.profileHeader}>
                    <View style={styles.profileTk}>
                        <Image
                            style={styles.avatarProfile}
                            source={require('../../assets/images/avatarb.jpg')}
                        />
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileInfoName}>Hoang0508</Text>
                            <View style={styles.profileTV}>
                                <Text style={styles.txtTv}>Thành viên</Text>
                                <Icon style={styles.iconChev} name="chevron-right" />
                            </View>
                            <View style={styles.profileFollow}>
                                <Text style={styles.txtFollow}>Lượt Follow: 50</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.profileTitle}>
                    <View style={styles.txtTitleLeft}>
                        <Text style={styles.txtTitle}>Mua hàng</Text>
                    </View>
                    <View style={styles.txtTitleRight}>
                        <Text style={styles.txtTitle}>Thông tin</Text>
                    </View>
                </View>
                <View style={styles.profileSale}>
                    <Text style={styles.txtSale}>12.12 Siêu Sale Starbucks 50%</Text>
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
                <View style={styles.profileCart}>
                    <View style={styles.profileCartTitle}>
                        <Icon name="folder-plus" style={styles.iconCartTitle} />
                        <Text style={styles.txtCartD}>Đơn mua</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    profileHeader: {
        minHeight: 180,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // opacity: 0.6,
        zIndex: -1,
        position: 'relative',
    },
    avatarProfile: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        borderRadius: 170,
    },
    profileTk: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
        zIndex: 1,
        position: 'absolute',
        bottom: 30,
    },
    profileInfo: {
        marginLeft: 15,
    },
    profileInfoName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
    },
    profileTV: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginTop: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: 125,
    },
    txtTv: {
        color: '#333',
        fontWeight: '500',
        fontSize: 16,
        marginRight: 5,
    },
    iconChev: {
        fontSize: 16,
    },
    profileFollow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtFollow: {
        color: '#fff',
        fontSize: 16,
    },
    //
    profileTitle: {
        backgroundColor: '#fff',
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
        marginTop: 25,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    VouncherItem: {
        width: 70,
        height: 70,
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
        fontSize: 37,
        padding: 12,
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
});

export default Profile;



<ImageBackground source={require('../assets/images/long44.jpg')} resizeMode='cover' style={styles.image}>
<View style={{ width: '100%', height: '100%', }}>
    <View style={{ width: '100%', height: 150, }}>
        <View style={{ width: '100%', flexDirection: 'row', padding: 15, }}>
            {/* <MaterialCommunityIcons name="clipboard-list-outline" size={28} color="black" /> */}
            <Text style={{ fontSize: 20, marginLeft: 10, top: 2 }}>Đơn mua</Text>
        </View>
        <View style={{
            width: '100%', flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', padding: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#4ca655'
        }}>
            <View style={{ alignItems: 'center', width: '20%', }}>
                {/* <MaterialCommunityIcons name="clock-check" size={24} color="black" /> */}
                <Text style={{ fontSize: 12 }}>Chờ xác nhận</Text>
            </View >
            <View style={{ alignItems: 'center', width: '20%' }}>
                {/* <Ionicons name="md-file-tray-full-sharp" size={24} color="black" /> */}
                <Text style={{ fontSize: 12 }}>Chờ lấy hàng</Text>
            </View>
            <View style={{ alignItems: 'center', width: '20%' }}>
                {/* <FontAwesome5 name="shipping-fast" size={24} color="black" /> */}
                <Text style={{ fontSize: 12 }}>Chờ giao hàng</Text>
                <Text style={{ width: 20, height: 20, backgroundColor: 'red', textAlign: 'center', borderRadius: 10, left: 15, top: -5, position: 'absolute' }}>2</Text>
            </View>
            <View style={{ alignItems: 'center', width: '15%' }}>
                {/* <MaterialIcons name="stars" size={24} color="black" /> */}
                <Text style={{ fontSize: 12 }}>Đánh giá</Text>
            </View>

        </View>

    </View>
    <View style={styles.infor}>
        <View style={styles.inforChild}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <FontAwesome name="phone" size={20} color="black" /> */}
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}> Điện Thoại: </Text>
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}> 0337521915</Text>
            </View>
        </View>
        <View style={styles.inforChild}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <MaterialCommunityIcons name="email-outline" size={20} color="black" /> */}
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}> Email: </Text>
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}> thihuyen@gmail.com</Text>
            </View>
        </View>
        <View style={styles.inforChild}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <MaterialCommunityIcons name="map-marker-radius" size={20} color="black" /> */}
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}> Địa chỉ: </Text>
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}> Đông Anh, Hà Nội</Text>
            </View>
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
</View>
</ImageBackground>