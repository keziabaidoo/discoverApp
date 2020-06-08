import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Blog from './src/screens/Blog'
//import BlogContent from './src/screens/BlogContent'
import ListItems from './src/components/ListItems'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen
        name="Blog"  component={'Blog'}
        
        
        />


        <Stack.Screen
         name="ListItems"   component={'ListItems'}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center'
  },
});




