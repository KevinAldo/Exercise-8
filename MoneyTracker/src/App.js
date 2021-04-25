import 'react-native-gesture-handler';
import React from 'react'
// import {StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
    return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
        // <View>
        //     {/* <SplashScreen/> */}
        // </View>
    );
};
export default App;