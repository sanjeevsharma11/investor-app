import { View, Text } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import ContinueWithGoogleBtn from './ContinueWithGoogleBtn';

const AuthButtons = () => {
  return (
    <StyledComponent
      component={View}
      className='mt-4 items-center'
    >
      <ContinueWithGoogleBtn />
    </StyledComponent>
  );
};

export default AuthButtons;
