import { View, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { IFeed } from '../../../store/types/feed.types';
import { StyledComponent } from 'nativewind';
import ExpertInfoWrapper from './ExpertInfoWrapper';
import InstrumentInfoWrapper from './InstrumentInfoWrapper';
import StatsCardWrapper from './StatsCardWrapper';

const FeedCard = ({ feed }: { feed: IFeed }) => {
  return (
    <StyledComponent
      component={View}
      className='p-4 bg-white rounded-md shadow-sm my-2'
    >
      <ExpertInfoWrapper expert={feed.expert} />
      <InstrumentInfoWrapper {...feed} />
      <StatsCardWrapper {...feed} />
    </StyledComponent>
  );
};

export default memo(FeedCard, (prevProps, nextProps) => {
  return prevProps.feed._id === nextProps.feed._id;
});
