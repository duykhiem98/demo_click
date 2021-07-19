import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TextScreen } from "./src/Screens/TextScreen";
import { Image } from "react-native";
import { HtmlScreen } from "./src/Screens/HtmlScreen";
import { SWebView } from "./src/Screens/SWebview";

const Tab = createBottomTabNavigator();
export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63"
      }}
    >
      <Tab.Screen
        name="TextScreen"
        component={TextScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Image source={require("./src/icon/home.png")} style={{ width: 24, height: 24 }} />
          )
        }}
      />
      <Tab.Screen
        name="HtmlScreen"
        component={HtmlScreen}
        options={{
          tabBarLabel: "HTML",
          tabBarIcon: () => (
            <Image source={require('./src/icon/html.png')} style={{ width: 24, height: 24 }} />
          )
        }}
      />
      <Tab.Screen
        name="SWebView"
        component={SWebView}
        options={{
          tabBarLabel: "webview",
          tabBarIcon: () => (
            <Image source={require('./src/icon/html.png')} style={{ width: 24, height: 24 }} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default App;
