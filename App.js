import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import { CometChatUIKit } from '@cometchat/chat-uikit-react-native';
import { CometChat } from '@cometchat/chat-sdk-react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const uikitSettings = {
      appId: '279226a8f1acf8dc',
      authKey: '3fb7f02418f055c5afe4470d107be24ceeb5cd4a',
      region: 'IN',
      subscriptionType: CometChat.AppSettings.SUBSCRIPTION_TYPE_ALL_USERS,
    };

    CometChatUIKit.init(uikitSettings)
      .then(() => {
        console.log('CometChat UIKit initialized');
      })
      .catch(error => {
        console.log('CometChat initialization failed:', error);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
