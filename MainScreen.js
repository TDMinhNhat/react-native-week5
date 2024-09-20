import React from "react";
import {SafeAreaView, View, Text, Pressable, Image, StatusBar} from "react-native";

const MainScreen = ({navigation}) => {

  const solveChooseColor = () => {
    navigation.navigate("ChooseColor")
  }

  return <SafeAreaView style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
    <View style={{width: "90%"}}>
      <View>
        <Image source={require("./assets/blue.png")} style={{height: 326, width: 326}}/>
      </View>
      <View style={{display: "flex", flexDirection: "column", marginTop: 10}}>
        <View>
          <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View style = {{display: "flex", flexDirection: "row", marginTop: 15}}>
          <View>
            <Image source={require("./assets/rating.png")} style={{width: 100, height: 20}} />
          </View>
          <View>
            <Text style = {{marginLeft: 28}}>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={{display: "flex", flexDirection: "row", marginTop: 15}}>
          <View>
            <Text style={{fontWeight: 900}}>1.790.000 đ</Text>
          </View>
          <View>
            <Text style={{textDecorationLine: "line-through", color: "#6b6b6b", marginLeft: 44}}>1.790.000 đ</Text>
          </View>
        </View>
        <View style={{marginTop: 20, display: "flex", flexDirection: "row", alignItems: "center "}}>
            <Text style={{color: "red", fontWeight: "bold"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
            <Image source={require('./assets/question.png')} style={{width: 20, height: 20, marginLeft: 10}}/>
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 20}}>
        <Pressable style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", borderWidth: 2, borderColor: "#a6a6a6", borderRadius: 5, padding: 3}} onPress={() => solveChooseColor()}>
          <Text style={{ textAlign: "center", flex: 1}}>4 MÀU-CHỌN MÀU</Text>
          <Text style={{fontWeight: 900}}>></Text>
        </Pressable>
      </View>
    </View>
    <View style={{backgroundColor: "red", width: "90%", borderRadius: 10}}>
      <Pressable onPress={() => {}}>
        <Text style={{color: "white", fontWeight: 800, textAlign: "center", padding: 5}}>CHỌN MUA</Text>
      </Pressable>
    </View>
  </SafeAreaView>
}

export default MainScreen;