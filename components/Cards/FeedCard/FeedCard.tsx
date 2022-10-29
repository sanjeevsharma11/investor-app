import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { IFeed } from "../../../store/types/feed.types";
import { StyledComponent } from "nativewind";
import ExpertReturnIcon from "../../svg/feedcard/ExpertReturnIcon";
import ExpertAccuracyIcon from "../../svg/feedcard/ExpertAccuracyIcon";

const FeedCard = ({ feed }: { feed: IFeed }) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className="p-4 bg-white rounded-md shadow-sm my-2"
      activeOpacity={1}
    >
      <ExpertInfoWrapper expert={feed.expert} />
      <StyledComponent component={View} className="mt-4">
        <StyledComponent component={Text} className="text-lg font-bold">
          {feed.instrumentName}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

export default FeedCard;

const ExpertInfoWrapper = ({ expert }: { expert: IFeed["expert"] }) => {
  return (
    <StyledComponent component={View} className="flex-row justify-between">
      <StyledComponent
        component={View}
        className="flex-row items-center justify-center gap-2"
      >
        <StyledComponent
          component={Image}
          className="w-[29px] h-[29px] rounded-full border-2 border-gray-200"
          source={{ uri: expert.avatar }}
        />

        <StyledComponent
          component={View}
          className="flex-row items-center space-x-1"
        >
          <StyledComponent
            component={Text}
            className="font-bold text-[12px] text-[#0d0c0c]"
          >
            {expert.name}
          </StyledComponent>

          <StyledComponent
            component={View}
            className="bg-[#023047] py-1 px-1 flex-row items-center gap-x-1 rounded-full h-5"
          >
            <ExpertAccuracyIcon />
            <StyledComponent component={Text} className="text-white text-[8px]">
              {expert.return}%
            </StyledComponent>
          </StyledComponent>

          <StyledComponent
            component={View}
            className="bg-[#023047] py-1 px-1 flex-row items-center gap-x-1 rounded-full h-5"
          >
            <ExpertReturnIcon />
            <StyledComponent component={Text} className="text-white text-[8px]">
              {expert.return}%
            </StyledComponent>
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
