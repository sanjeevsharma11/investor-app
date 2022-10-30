import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';

const FeedDetailScreen = () => {
  return (
    <StyledComponent
      component={SafeAreaView}
      className='flex-1 bg-[#E6E9F3] px-4'
    >
      <StyledComponent
        component={Text}
        className='text-lg font-bold text-gray-500'
      >
        Feed Detail Screen
      </StyledComponent>
    </StyledComponent>
  );
};

export default FeedDetailScreen;
