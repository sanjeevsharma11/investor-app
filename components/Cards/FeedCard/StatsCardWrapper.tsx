import { View, Text } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import { IFeed } from '../../../store/types/feed.types';
import numberWithCommas from '../../../utils/numberWithCommas';
import {
  getExitDate,
  getTriggerLevelWithValue,
} from '../../../logic/feed_logic';

const StatsCardWrapper = ({
  minInvest,
  upsideInPrice,
  upsideInPercent,
  triggerLevel,
  exitDate,
  triggerPriceHigh,
  triggerPriceLow,
  LTP,
}: IFeed) => {
  return (
    <StyledComponent
      component={View}
      className='flex-row flex-wrap justify-center items-center mt-4'
    >
      <InvestmentStatsCard minInvest={minInvest} />
      <UpsideAndDownSideStatsCard
        upsideInPrice={upsideInPrice}
        upsideInPercent={upsideInPercent}
      />
      <TriggerLevelStatsCard
        triggerLevel={triggerLevel}
        triggerPriceLow={triggerPriceLow}
        triggerPriceHigh={triggerPriceHigh}
        LTP={LTP}
      />
      <ExitDateStatsCard exitDate={exitDate} />
    </StyledComponent>
  );
};

export default StatsCardWrapper;

const InvestmentStatsCard = ({
  minInvest,
}: {
  minInvest: IFeed['minInvest'];
}) => {
  return (
    <StyledComponent
      component={View}
      className='bg-[#E5F0FF] h-[60px]  w-[140px]  p-2 justify-center rounded-lg  items-start mr-2 mb-4'
    >
      <StyledComponent
        component={Text}
        className='text-[#5589FF] font-medium text-xs'
      >
        Min Investment
      </StyledComponent>
      <StyledComponent
        component={View}
        className=''
      >
        <StyledComponent
          component={Text}
          className='text-[#294166] font-medium text-sm'
        >
          ₹{numberWithCommas(minInvest)}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

const UpsideAndDownSideStatsCard = ({
  upsideInPrice,
  upsideInPercent,
}: {
  upsideInPrice: IFeed['upsideInPrice'];
  upsideInPercent: IFeed['upsideInPercent'];
}) => {
  return (
    <StyledComponent
      component={View}
      className='bg-[#E5F0FF]  h-[60px] w-[140px]  p-2 justify-center rounded-lg  items-end'
    >
      <StyledComponent
        component={Text}
        className='text-[#5589FF] font-medium text-xs'
      >
        Upside
      </StyledComponent>
      <StyledComponent
        component={View}
        className=''
      >
        <StyledComponent
          component={View}
          className='text-[#294166] font-medium flex-row items-center space-x-1'
        >
          <StyledComponent
            component={Text}
            className={
              upsideInPrice > 0
                ? 'text-[#0D9F36] font-medium text-base'
                : 'text-[#FF4848] font-medium text-base'
            }
          >
            {upsideInPercent}%
          </StyledComponent>
          <StyledComponent
            component={Text}
            className='text-[#294166] font-medium text-sm'
          >
            ₹{numberWithCommas(upsideInPrice)}
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

const TriggerLevelStatsCard = ({
  triggerLevel: TRIGGER_LEVEL,
  triggerPriceLow,
  triggerPriceHigh,
  LTP,
}: {
  triggerLevel: IFeed['triggerLevel'];
  triggerPriceLow: IFeed['triggerPriceLow'];
  triggerPriceHigh: IFeed['triggerPriceHigh'];
  LTP: number;
}) => {
  const [triggerLevel, triggerValue] = getTriggerLevelWithValue({
    triggerLevel: TRIGGER_LEVEL as string,
    LTP: LTP as number,
    triggerPriceHigh: triggerPriceHigh as number,
    triggerPriceLow: triggerPriceLow as number,
  });

  return (
    <StyledComponent
      component={View}
      className='bg-[#E5F0FF]  h-[60px] w-[140px]  p-2 justify-center rounded-lg  items-start  mr-2'
    >
      <StyledComponent
        component={Text}
        className='text-[#5589FF] font-medium text-xs'
      >
        Trigger Level
      </StyledComponent>
      <StyledComponent
        component={View}
        className=''
      >
        <StyledComponent
          component={Text}
          className='text-[#294166] font-medium text-sm truncate '
        >
          {triggerLevel !== 'Range' ? triggerLevel : ''} ₹
          {Array.isArray(triggerValue)
            ? numberWithCommas(Number(Number(triggerValue[0]).toFixed(0))) +
              ' - ' +
              numberWithCommas(Number(Number(triggerValue[1]).toFixed(0)))
            : numberWithCommas(Number(Number(triggerValue).toFixed(0)))}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

const ExitDateStatsCard = ({ exitDate }: { exitDate: IFeed['exitDate'] }) => {
  return (
    <StyledComponent
      component={View}
      className='bg-[#E5F0FF]  h-[60px] w-[140px]  p-2 justify-center rounded-lg  items-end  '
    >
      <StyledComponent
        component={Text}
        className='text-[#5589FF] font-medium text-xs'
      >
        Exit Date
      </StyledComponent>
      <StyledComponent
        component={View}
        className=''
      >
        <StyledComponent
          component={Text}
          className='text-[#294166] font-medium text-sm'
        >
          {getExitDate(exitDate)}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
