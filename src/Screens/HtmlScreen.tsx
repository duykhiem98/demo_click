import React, { useCallback, useState } from "react";
import { View, Text, Alert, useWindowDimensions, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { ModalPoup } from "../components/ModalPoup";
import RenderHtml from "react-native-render-html";
import IframeRenderer, { iframeModel } from "@native-html/iframe-plugin";


const source = {
  html: `
    <h1>VR Lorem ipsum dolor sit amet, consectetur adipiscing elit. !</h1>
    <em>By <b class="author">React Native Master</b></em>
    <img src="https://image.freepik.com/free-photo/young-woman-using-vr-glasses-with-neon-lights_155003-17747.jpg" />
    <p>Vivamus bibendum feugiat pretium. <a href="https://reactnativemaster.com/">Vestibulum ultricies rutrum ornare</a>. Donec eget suscipit tortor. Nullam pellentesque nibh sagittis, pharetra quam a, varius sapien. Pellentesque ut leo id mauris hendrerit ultrices et non mauris. Quisque gravida erat at felis tincidunt tincidunt. Etiam sit amet egestas leo. Cras mollis mi sed lorem finibus, interdum molestie magna mollis. Sed venenatis lorem nec magna convallis iaculis.</p>
    <iframe height="315" src="https://www.youtube.com/embed/fnCmUWqKo6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
};

function onPress({ event, href }: any) {
  Alert.alert(`You just pressed ${href}`);
}

const renderers = {
  iframe: IframeRenderer
};
const customHTMLElementModels = {
  iframe: iframeModel
};
const renderersProps = {
  p: {
    onPress: onPress
  },
  iframe: {
    webViewProps: { allowsFullscreenVideo: true },
    scalesPageToFit: true
  }
};

export const HtmlScreen = () => {
  const { width } = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const [word, setWord] = useState("");

  const alterData = useCallback((node) => {
    let { parent, data } = node;
    if (parent.name === "p") {
      return parent.name + " href : " + data
    }
    return data
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
        </ModalPoup>

        <RenderHtml
          renderers={renderers}
          contentWidth={width}
          source={source}
          customHTMLElementModels={customHTMLElementModels}
          renderersProps={renderersProps}
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
