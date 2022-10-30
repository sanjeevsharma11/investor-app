import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import Logo from '../svg/header/Logo';
import Trophy from '../svg/header/Trophy';

const HomeHeader = () => {
  return (
    <StyledComponent
      component={View}
      className='bg-[#023047] p-3 flex-row items-center justify-between'
    >
      <Logo />
      <Trophy />
    </StyledComponent>
  );
};

export default HomeHeader;
