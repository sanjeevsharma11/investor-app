import { View, Text, Image } from "react-native";
import React from "react";
import { StyledComponent } from "nativewind";
import Logo from "../svg/header/Logo";



const HomeHeader = () => {
  return (
    <StyledComponent component={View}
      className='bg-[#023047] p-3 flex-row items-center justify-between'
    >
      <Logo  />

    </StyledComponent>
  );
};

export default HomeHeader;
