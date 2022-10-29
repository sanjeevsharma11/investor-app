import { View, Text, Image } from "react-native";
import React from "react";
import { StyledComponent } from "nativewind";


const logo = require('../../assets/images/logo/logo.png')
const trophy = require('../../assets/images/header/trophy.png')

const HomeHeader = () => {
  return (
    <StyledComponent component={View}
      className='bg-[#023047] p-3 flex-row items-center justify-between'
    >
      <StyledComponent component={Image} 
        source={logo}
        className='h-14 w-14'
      />
      <StyledComponent component={Image}
        source={trophy}
        className=''
      />
    </StyledComponent>
  );
};

export default HomeHeader;
