import { View, Text } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';
import { IFeed } from '../../../store/types/feed.types';
import StartIcon from '../../../svg/feedcard/StartIcon';

const InstrumentInfoWrapper = ({
  instrumentName,
  transactionType,
  LTP,
  instrumentReturn,
  premiumTradeType,
  bullishOrBearish,
}: IFeed) => {
  return (
    <StyledComponent
      component={View}
      className='flex-row items-center mt-4'
    >
      <BuyOrSellIcon
        transactionType={transactionType}
        premiumTradeType={premiumTradeType}
      />
      <InstrumentName
        instrumentName={instrumentName}
        LTP={LTP}
      />
      <SinceAdded
        instrumentReturn={instrumentReturn}
        bullishOrBearish={bullishOrBearish}
      />
    </StyledComponent>
  );
};

export default InstrumentInfoWrapper;

const BuyOrSellIcon = ({
  transactionType,
  premiumTradeType,
}: {
  transactionType: IFeed['transactionType'];
  premiumTradeType: IFeed['premiumTradeType'];
}) => {
  return (
    <StyledComponent
      component={View}
      className={
        transactionType === 'BUY'
          ? 'items-center justify-center rounded-md w-8 h-8'
          : 'items-center justify-center rounded-md w-8 h-8'
      }
      style={
        premiumTradeType === 'PAID'
          ? {
            backgroundColor: 'rgba(255, 226, 183, 1)',
          }
          : transactionType === 'BUY'
            ? {
              backgroundColor: 'rgba(202, 255, 217, 1)',
            }
            : {
              backgroundColor: 'rgba(255, 72, 72, 0.15)',
            }
      }
    >
      {premiumTradeType === 'PAID' ? (
        <StyledComponent
          component={Text}
          className={
            transactionType === 'BUY' ? 'text-[#0D9F36]' : 'text-[#FF4848]'
          }
        >
          <StartIcon />
        </StyledComponent>
      ) : (
        <StyledComponent
          component={Text}
          className={
            transactionType === 'BUY' ? 'text-[#0D9F36]' : 'text-[#FF4848]'
          }
        >
          {transactionType === 'BUY' ? 'B' : 'S'}
        </StyledComponent>
      )}
    </StyledComponent>
  );
};

const InstrumentName = ({
  instrumentName,
  LTP,
}: {
  instrumentName: IFeed['instrumentName'];
  LTP: IFeed['LTP'];
}) => {
  return (
    <StyledComponent
      component={Text}
      className='text-black font-medium ml-2 text-sm'
    >
      {instrumentName}{' '}
      <StyledComponent
        component={Text}
        className='text-gray-400 font-normal text-sm'
      >
        {LTP}
      </StyledComponent>
    </StyledComponent>
  );
};

const SinceAdded = ({
  instrumentReturn,
  bullishOrBearish,
}: {
  instrumentReturn: IFeed['instrumentReturn'];
  bullishOrBearish: IFeed['bullishOrBearish'];
}) => {
  const className = `
  text-gray-400 font-normal text-[10px]
  ${instrumentReturn > 0 && bullishOrBearish.toLowerCase() === 'bullish'
      ? 'text-[#0D9F36]'
      : instrumentReturn > 0 && bullishOrBearish.toLowerCase() !== 'bullish'
        ? 'text-[#FF4848]'
        : instrumentReturn < 0 && bullishOrBearish.toLowerCase() === 'bullish'
          ? 'text-[#FF4848]'
          : instrumentReturn < 0 && bullishOrBearish.toLowerCase() !== 'bullish'
            ? 'text-[#0D9F36]'
            : ''
    }`;

  return (
    <StyledComponent
      component={View}
      className='ml-1'
    >
      <StyledComponent
        component={Text}
        className={className}
      >
        {instrumentReturn}%
      </StyledComponent>
      <StyledComponent
        component={Text}
        className='text-[#b5b5b5] text-[6px] mt-[-2px]'
      >
        Since Added
      </StyledComponent>
    </StyledComponent>
  );
};
