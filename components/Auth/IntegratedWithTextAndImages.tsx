import { View, Text } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import ZerodhaIcon from '../../svg/auth/ZerodhaIcon';
import AngeloneIcon from '../../svg/auth/AngeloneIcon';
import TradingViewIcon from '../../svg/auth/TradingViewIcon';
import RazorpayIcon from '../../svg/auth/RazorpayIcon';

const IntegratedWithTextAndImages = () => {
  return (
    <StyledComponent
      component={View}
      className='mt-4 items-center'
    >
      <StyledComponent
        component={Text}
        className='text-xs font-medium text-[#AAAAAA]'
      >
        Integrated with
      </StyledComponent>

      <StyledComponent
        component={View}
        className='flex flex-row items-center justify-center mt-2'
      >
        <ZerodhaIcon />
        <AngeloneIcon />
        <TradingViewIcon />
        <RazorpayIcon />
      </StyledComponent>

    

    </StyledComponent>
  );
};

export default IntegratedWithTextAndImages;
