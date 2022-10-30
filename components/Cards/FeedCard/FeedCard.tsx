import { View, Text } from 'react-native';
import React, { memo, useEffect } from 'react';
import { IFeed } from '../../../store/types/feed.types';
import { StyledComponent } from 'nativewind';
import ExpertInfoWrapper from './ExpertInfoWrapper';
import InstrumentInfoWrapper from './InstrumentInfoWrapper';
import StatsCardWrapper from './StatsCardWrapper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { IRootStackParamList } from '../../../App';
import * as Google from 'expo-auth-session/providers/google';

const FeedCard = ({ feed }: { feed: IFeed }) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRootStackParamList>>();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '678052593552-ribm00sia1tho0t60ajc3a3gd2khjh81.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  const handleGoogleLogin = async () => {
    try {
      const result = await promptAsync();

      if (result.type === 'success') {
        navigate('FeedDetailScreen');
      }
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
    </StyledComponent>
  );
};

export default memo(FeedCard, (prevProps, nextProps) => {
  return prevProps.feed._id === nextProps.feed._id;
});
