import { View, Text, Button } from 'react-native';
import React, { memo, useEffect } from 'react';
import { IFeed } from '../../../store/types/feed.types';
import { StyledComponent } from 'nativewind';
import ExpertInfoWrapper from './ExpertInfoWrapper';
import InstrumentInfoWrapper from './InstrumentInfoWrapper';
import StatsCardWrapper from './StatsCardWrapper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRootStackParamList } from 'App';


const FeedCard = ({ feed }: { feed: IFeed }) => {

    const { navigate } =
      useNavigation<NativeStackNavigationProp<IRootStackParamList>>();

    const handleViewMore = async () => {
      try {
        navigate('FeedDetailScreen', { id: feed._id });
      } catch (e) {
        console.log(e);
      }
    };

  return (
    <StyledComponent
      component={View}
      className='p-4 bg-white rounded-md shadow-sm my-2 '
    >
      <ExpertInfoWrapper expert={feed.expert} />
      <InstrumentInfoWrapper {...feed} />
      <StatsCardWrapper {...feed} />

      <StyledComponent
        component={View}
        className='bg-blue-600 px-4 py-2 my-2 rounded-full  items-center justify-center '
      >
        <StyledComponent
          component={Text}
          className='text-white text-center w-40'
          onPress={handleViewMore}
        >
          View more
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

export default memo(FeedCard, (prevProps, nextProps) => {
  return prevProps.feed._id === nextProps.feed._id;
});
