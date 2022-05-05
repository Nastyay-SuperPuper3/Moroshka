import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './pages/SearchScreen/SearchScreen';
import CategoryScreen from './pages/CategoryScreen/CategoryScreen';
import Header from './components/Header/Header';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator headerMode='none' initialRouteName='Category'>
        <Screen 
          name='Category' 
          component={CategoryScreen} 
          options={{ headerShown: false }}
        ></Screen>
        <Screen 
          name='Search' 
          component={SearchScreen} 
          options={{ headerShown: false }}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}