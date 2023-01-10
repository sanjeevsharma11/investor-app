import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import ExpertAccuracyIcon from '../../../svg/feedcard/ExpertAccuracyIcon';
import ExpertReturnIcon from '../../../svg/feedcard/ExpertReturnIcon';
import { IFeed } from '../../../store/types/feed.types';
import numeral from 'numeral';

const ExpertInfoWrapper = ({ expert }: { expert: IFeed['expert'] }) => {
  return (
    <StyledComponent
      component={View}
      className='flex-row justify-between'
    >
      <StyledComponent
        component={View}
        className='flex-row items-center justify-center gap-2'
      >
        <StyledComponent
          component={Image}
          className='w-[29px] h-[29px] rounded-full border-2 border-gray-200'
          source={{ uri: expert.avatar }}
        />

        <StyledComponent
          component={View}
          className='flex-row items-center space-x-1'
        >
          <StyledComponent
            component={Text}
            className='font-bold text-[12px] text-[#0d0c0c]'
          >
            {expert.name}
          </StyledComponent>

          <StyledComponent
            component={View}
            className='bg-[#023047] px-[4px] py-[2px] flex-row items-center gap-x-1 rounded-full h-4'
          >
            <ExpertAccuracyIcon />
            <StyledComponent
              component={Text}
              className='text-white text-[8px]'
            >
              {expert.return}%
            </StyledComponent>
          </StyledComponent>

          <StyledComponent
            component={View}
            className='bg-[#023047] px-[4px] py-[2px] flex-row items-center gap-x-1 rounded-full h-4'
          >
            <ExpertReturnIcon />
            <StyledComponent
              component={Text}
              className='text-white text-[8px]'
            >
              {numeral(expert.hitRatio).format('0')}%
            </StyledComponent>
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
export default ExpertInfoWrapper;
