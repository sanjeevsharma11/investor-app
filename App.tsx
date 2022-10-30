import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FeedDetailScreen from './screens/FeedDetailScreen';

export type IRootStackParamList = {
  Home: undefined;
  FeedDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<IRootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='FeedDetailScreen'
          component={FeedDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
