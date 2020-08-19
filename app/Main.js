import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import UserInfo from './UserInfo';
const Stack = createStackNavigator();
export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{    headerShown: false
            }}  initialRouteName="Home" >
                <Stack.Screen  name={'Home'} component={App}/>
                <Stack.Screen  name={'UserInfo'} component={UserInfo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
