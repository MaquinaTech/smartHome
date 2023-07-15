import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainMenu from './navigation/MainMenu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainMenu />
    </NavigationContainer>
  );
}