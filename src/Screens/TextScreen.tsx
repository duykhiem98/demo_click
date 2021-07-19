import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { ModalPoup } from "../components/ModalPoup";

export const TextScreen = () => {
  const { width } = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const [word, setWord] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ModalPoup visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require("../icon/close.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text> {word}</Text>
        </ModalPoup>
        <Image source={{uri:'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg'}}
        style={{ height:300,width:'100%'}}
        />
        <View style={{ flexDirection: "row", flexWrap: "wrap",paddingVertical:20,paddingHorizontal:10 }}>
          {"Hi there! This issue is being closed because it has been inactive for a while. Maybe the issue has been fixed in a recent release, or perhaps it is not affecting a lot of people. Either way, we're automatically closing issues after a period of inactivity. Please do not take it personally! If you think this issue should definitely remain open, please let us know.A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.".split(" ").map((item, index) =>
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
                setWord(item);
              }
              }>
              <Text>{item} </Text>
            </TouchableOpacity>)}
        </View>
        {/*        <SelectableText*/}
        {/*          menuItems={["Dịch"]}*/}
        {/*          onSelection={({ eventType, content, selectionStart, selectionEnd }) => {*/}
        {/*            setVisible(true);*/}
        {/*            setWord(content);*/}
        {/*          }}*/}
        {/*          style={styles.welcome}*/}
        {/*          value="Hi there! This issue is being closed because it has been inactive for a while. Maybe the issue has been fixed in a recent release, or perhaps it is not affecting a lot of people. Either way, we're automatically closing issues after a period of inactivity. Please do not take it personally!*/}

        {/*If you think this issue should definitely remain open, please let us know. The following information is helpful when it comes to determining if the issue should be re-opened:*/}

        {/*Does the issue stions are very welcome! Read through the contribution guide, and feel free to hop into #react-native if you need help planning your contribution."*/}
        {/*        />*/}

      </ScrollView>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FF0000"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20
  },
  header: {
    width: "100%",
    alignItems: "flex-end"
  }
});
