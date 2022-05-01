// import Fireworks from "react-native-fireworks";
import React from 'react';
import { View } from "react-native";
import Fireworks from "react-native-fireworks";
export default function HoangLe() {
    return (
      <View style={{flex :1}}>
         
        
         <Fireworks
          speed={10}
          density={30}
          colors={["#2e8221", "#a381de", "#e6508e", "#d11b1e", "#5266ff"]}
          iterations={500}
          height={100}
          width={100}
          zIndex={2}
          circular={true}
      />
      </View>
    );
  }