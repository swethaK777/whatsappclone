import React from "react";
import { Text, View ,StatusBar} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import { Feather as Icon } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import Chats from "./ChatScreen";
import Status from "./StatusScreen";
import Calls from "./CallScreen";
import AppHeader from "../components/AppHeader";

const Tab = createMaterialTopTabNavigator();


export default function MainScreen (){
  return (
    <Tab.Navigator
    initialRouteName="chats" 
    backgroundColor={"#034840"}
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle: { fontSize: 12,fontWeight:'bold',color:'white' ,marginTop:30},
      tabBarStyle: { backgroundColor: '#034840' },
    }}>
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
  </Tab.Navigator>
 
  );
};
