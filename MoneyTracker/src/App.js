import 'react-native-gesture-handler';
import React from 'react'
// import {StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";

const App = () => {
    return (
      <NavigationContainer>
        <Router/>
        <FlashMessage position="top" />
      </NavigationContainer>
        // <View>
        //     {/* <SplashScreen/> */}
        // </View>
    );
};
export default App;