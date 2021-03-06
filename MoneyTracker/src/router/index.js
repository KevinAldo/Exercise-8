import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AddTransaction, Home, SignIn, SignUp, SplashScreen } from '../pages';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreen} 
            options={{headerShown: false}}/>
          <Stack.Screen
            name="SignIn" 
            component={SignIn} 
            options={{headerShown: false}}/>
          <Stack.Screen
            name="SignUp" 
            component={SignUp} 
            options={{headerShown: false}}/>
            <Stack.Screen
            name="Home" 
            component={Home} 
            options={{headerShown: false}}/>
            <Stack.Screen
            name="AddTransaction"
            component={AddTransaction}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Router;
