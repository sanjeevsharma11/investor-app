import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { IFeed } from '../../../store/types/feed.types';
import { StyledComponent } from 'nativewind';
import ExpertInfoWrapper from './ExpertInfoWrapper';
import InstrumentInfoWrapper from './InstrumentInfoWrapper';

const FeedCard = ({ feed }: { feed: IFeed }) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className='p-4 bg-white rounded-md shadow-sm my-2'
      activeOpacity={1}
    >
      <ExpertInfoWrapper expert={feed.expert} />
      <InstrumentInfoWrapper
        instrumentName={feed.instrumentName}
        transactionType={feed.transactionType}
        LTP={feed.LTP}
        instrumentReturn={feed.instrumentReturn}
        premiumTradeType={feed.premiumTradeType}
        bullishOrBearish={feed.bullishOrBearish}
      />
    </StyledComponent>
  );
};

export default FeedCard;
