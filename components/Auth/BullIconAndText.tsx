import { Text, View } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import BullIcon from '../../svg/auth/BullIcon';

const BullIconAndText = () => {
  return (
    <StyledComponent component={View}
      className='items-center justify-center border-2 border-t-0 border-x-0 border-b-[#ECECEC] pb-4 w-full'>
      <BullIcon />

      <StyledComponent
        component={Text}
        className='text-sm font-semibold text-black mt-2'
      >
        Discover India’s Top Stock Market Expert
      </StyledComponent>
    </StyledComponent>
  );
};

export default BullIconAndText;
