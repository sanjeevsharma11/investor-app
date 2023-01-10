import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import BullIconAndText from '../components/Auth/BullIconAndText';
import IntegratedWithTextAndImages from '../components/Auth/IntegratedWithTextAndImages';
import AuthButtons from '../components/Auth/AuthButtons';

const AuthScreen = () => {
  return (
    <StyledComponent
      component={SafeAreaView}
      className='bg-white flex-1 h-full justify-between items-center py-20 px-8 w-full'
    >
      <StyledComponent
        component={View}
        className='items-center w-full'
      >
        <BullIconAndText />
        <IntegratedWithTextAndImages />
      </StyledComponent>

      <AuthButtons />
    </StyledComponent>
  );
};

export default AuthScreen;
