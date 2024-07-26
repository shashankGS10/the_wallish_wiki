import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StoriesScreen from '../screens/StoriesScreen';


const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}  />
      <Stack.Screen name="Stories" component={StoriesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// pixel ganda dikhra he -- Image compression k sath
//Timer progress bar
//Compare real wala
// New and close circle for story new feed
//