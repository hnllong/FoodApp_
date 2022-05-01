import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from '@react-native-community/slider';

const NX = () => {
  const [rating, setRating] = useState(1);
 // trả về và hiển thị
  const getRatingEmoji = () => {
    if (rating === 1) {
      return '🥵';
    }
    else if (rating ===2) {
      return '🤧';
    }
    else if (rating === 3) {
      return '🙄';
    }
    else if (rating === 4) {
      return '😋';
    }
    else if (rating === 5) {
      return '🥰';
    }
  };
  return (
    <View style={styles.container}>
      <Slider
        style={{ width:300, height:50 }}
        minimumValue={1}
        maximumValue={5}
        step={1}
        onValueChange={setRating} // lưu dữ liệu thực hiện
      />
      <Text style={{fontSize:60}}>
        {getRatingEmoji()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
export default NX;