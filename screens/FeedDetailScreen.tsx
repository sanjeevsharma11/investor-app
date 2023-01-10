import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import { useRoute } from '@react-navigation/native';

const FeedDetailScreen = () => {
  const { params } = useRoute();

  const { id } = params as { id: string };

  


  return (
    <StyledComponent
      component={SafeAreaView}
      className='flex-1 bg-[#E6E9F3] px-4'
    >
      <StyledComponent
        component={Text}
        className='text-lg font-bold text-gray-500'
      >
        Feed Detail Screen - {id}
      </StyledComponent>
    </StyledComponent>
  );
};

export default FeedDetailScreen;
