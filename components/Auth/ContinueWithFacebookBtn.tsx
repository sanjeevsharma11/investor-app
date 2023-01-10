import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { IRootStackParamList } from '../../App';

const ContinueWithFacebookBtn = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRootStackParamList>>();

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: '1244150636145738',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  const handleFacebookLogin = async () => {
    try {
      const result = await promptAsync();

      if (result.type === 'success') {
        navigate('Home');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledComponent
      component={TouchableOpacity}
      activeOpacity={0.5}
      onPress={handleFacebookLogin}
    >
      <StyledComponent
        component={View}
        className='flex-row mt-2 items-center justify-center space-x-2 bg-[#F9F9F9] rounded-md p-2 w-72'
      >
        <MaterialIcons
          name='facebook'
          size={24}
          color='#1877F2'
        />
        <StyledComponent
          component={Text}
          className='text-black font-normal text-sm'
        >
          Continue with Facebook
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

export default ContinueWithFacebookBtn;
