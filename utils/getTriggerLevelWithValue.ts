const getTriggerLevelWithValue = ({
  triggerLevel,
  LTP,
  triggerPriceHigh,
  triggerPriceLow,
}: {
  triggerLevel: string;
  LTP: number;
  triggerPriceHigh: number;
  triggerPriceLow: number;
}) => {
  switch (triggerLevel) {
    case 'above': {
      const triggerLevel = 'Above';
      const triggerValue = triggerPriceHigh;

      return [triggerLevel, triggerValue];
    }
    case 'below': {
      const triggerLevel = 'Below';
      const triggerValue = triggerPriceLow;

      return [triggerLevel, triggerValue];
    }
    case 'range': {
      const triggerLevel = 'Range';
      const triggerValue = [triggerPriceLow, triggerPriceHigh];

      return [triggerLevel, triggerValue];
    }

    default: {
      const triggerLevel = 'Market';
      const triggerValue = LTP;

      return [triggerLevel, triggerValue];
    }
  }
};

export default getTriggerLevelWithValue;