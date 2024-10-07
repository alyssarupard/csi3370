import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import MainScreen from './src/screens/MainScreen';
import LessonSelectionScreen from './src/screens/LessonSelectionScreen';
import LessonDetailScreen from './src/screens/LessonDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Select Grade' }} />
        <Stack.Screen name="LessonSelectionScreen" component={LessonSelectionScreen} options={{ title: 'Select Lesson' }} />
        <Stack.Screen name="LessonDetailScreen" component={
