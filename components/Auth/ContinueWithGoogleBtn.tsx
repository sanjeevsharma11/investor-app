import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { IRootStackParamList } from '../../App';


const ContinueWithGoogleBtn = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRootStackParamList>>();

 

  const handleGoogleLogin = async () => {
    try {
      navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledComponent
      component={TouchableOpacity}
      activeOpacity={0.5}
      onPress={handleGoogleLogin}
    >
      <StyledComponent
        component={View}
        className='flex-row items-center justify-center space-x-2 bg-[#4285F4] rounded-md p-2 w-72'
      >
        <AntDesign
          name='google'
          size={24}
          color='white'
        />
        <StyledComponent
          component={Text}
          className='text-white font-normal text-sm'
        >
          Continue with Google
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

export default ContinueWithGoogleBtn;
