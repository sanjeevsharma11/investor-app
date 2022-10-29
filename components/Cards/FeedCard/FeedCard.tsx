import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { IFeed } from "../../../store/types/feed.types";
import { StyledComponent } from "nativewind";

const FeedCard = ({ feed }: { feed: IFeed }) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className="p-4 bg-white rounded-md shadow-sm my-2"
    >
      <ExpertInfoWrapper 
        expert={feed.expert}
      />
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
          className="w-7 h-7 rounded-full border-2 border-gray-200"
          source={{ uri: expert.avatar }}
        />
        <StyledComponent component={Text} className="font-semibold">
          {expert.name}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
