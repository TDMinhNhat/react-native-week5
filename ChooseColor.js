import React from "react"
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";


const ChooseColorScreen = ({ route, navigation }) => {

  const getColor = (color) => {
    if (color == "skyblue")
      return require("./assets/silver.png")
    else if (color == "red")
      return require("./assets/red.png")
    else if (color == "black")
      return require("./assets/black.png")
    else if (color == "darkblue")
      return require("./assets/blue.png")
  }

  const { color, setSelectColor } = route.params
  const [currentColor, setCurrentColor] = React.useState(color)

  return <SafeAreaView>
    <View style={{ backgroundColor: "white", alignItems: "center" }}>
      <View style={{ with: "90%", display: "flex", flexDirection: "row" }}>
        <View>
          <Image source={getColor(currentColor)} style={{ width: 120, height: 150 }} />
        </View>
        <View style={{ width: "50%", marginTop: 20, marginLeft: 10 }}>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
      </View>
    </View>
    <View style={{ backgroundColor: "#c4c4c4", height: "100%", alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <View>
          <Text>Chọn màu bên dưới:</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Pressable style={{ width: 75, height: 75, backgroundColor: "skyblue", marginTop: 5, borderWidth: 2, borderColor: currentColor == "skyblue" ? "yellow" : "transparent" }} onPress={() => {setSelectColor("skyblue"); setCurrentColor("skyblue")}}></Pressable>
          <Pressable style={{ width: 75, height: 75, backgroundColor: "red", marginTop: 5, borderWidth: 2, borderColor: currentColor == "red" ? "yellow" : "transparent" }} onPress={() => {setSelectColor("red"); setCurrentColor("red")}}></Pressable>
          <Pressable style={{ width: 75, height: 75, backgroundColor: "black", marginTop: 5, borderWidth: 2, borderColor: currentColor == "black" ? "yellow" : "transparent" }} onPress={() => {setSelectColor("black"); setCurrentColor("black")}}></Pressable>
          <Pressable style={{ width: 75, height: 75, backgroundColor: "darkblue", marginTop: 5, borderWidth: 2, borderColor: currentColor == "darkblue" ? "yellow" : "transparent" }} onPress={() => {setSelectColor("darkblue"); setCurrentColor("darkblue")}}></Pressable>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20, backgroundColor: "#4d6ec1", width: "90%", borderRadius: 10 }}>
        <Pressable style={{ padding: 8 }} onPress={() => navigation.goBack()}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Xong</Text>
        </Pressable>
      </View>
    </View>
  </SafeAreaView>
}

export default ChooseColorScreen;