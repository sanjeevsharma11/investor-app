import { StyledComponent } from "nativewind";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeedCard from "../components/Cards/FeedCard/FeedCard";
import HomeHeader from "../components/Header/HomeHeader";
import useFetchFeeds from "../hooks/useFetchFeeds";
import { API_URL } from "../store/constants";
import { IFeed } from "../store/types/feed.types";

const feed = {
  _id: "635b86ccb3712aca18e82803",
  expert: {
    _id: "61debfbc85a3f110e85585fc",
    avatar:
      "https://prod-iwt-bucket.s3.ap-south-1.amazonaws.com/image-1650348918736840fd4ed-12d7-4d7f-87db-70dbac654b9a.jpg",
    name: "RideMultibagger",
    rating: 5,
    isCertified: false,
    return: 31,
    hitRatio: 0.46,
    username: "ridemultibagger",
  },
  transactionType: "SELL",
  instrumentName: "Premium Trade",
  instrumentReturn: 0,
  reason: "banknifty setup",
  minInvest: 6707.5,
  upsideInPercent: 101,
  upsideInPrice: 6758,
  triggerLevel: "market",
  triggerPriceLow: 0,
  triggerPriceHigh: 0,
  LTP: 134.15,
  bullishOrBearish: "Bullish",
  exitDate: new Date("2022-11-24T10:15:00.000Z"),
  reactions: [
    {
      count: 1,
      reaction: "👍",
    },
  ],
  reactionCount: 1,
  shareCount: 0,
  createdAt: new Date("2022-10-28T07:37:48.138Z"),
  premiumTradePrice: 1999,
  tradingViewStockName: "BANKNIFTY",
  hashtags: "#invest, #stockmarketindia, #OptionsWithRMB, #Options",
  isPremium: true,
  premiumTradeType: "PAID",
};

const HomeScreen = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setlimit] = useState(1);

  const { feeds, loading, error, hasMore } = useFetchFeeds({
    skip,
    limit,
  });

  const handleLoadMore = useCallback(() => {
    setSkip((prevPage) => prevPage + limit);
  }, [limit]);

  return (
    <StyledComponent component={SafeAreaView} className="bg-[#E6E9F3] pb-20">
      <HomeHeader />
      <StyledComponent
        component={ScrollView}
        showsVerticalScrollIndicator={false}
        className="pb-12 px-2"
      >
        <FeedCard feed={feed} />
      </StyledComponent>

      {/* <StyledComponent
        component={FlatList}
        className="flex-1 h-full"
        data={feeds}
        renderItem={({ item }) => <FeedCard feed={item as IFeed} />}
        keyExtractor={(item) => (item as IFeed)._id}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={
          loading ? (
            <StyledComponent component={ActivityIndicator} />
          ) : error ? (
            <StyledComponent
              component={View}
              className="flex-row justify-center items-center"
            >
              <StyledComponent
                component={Text}
                className="text-lg font-bold text-red-500"
              >
                {error}
              </StyledComponent>
            </StyledComponent>
          ) : !hasMore ? (
            <StyledComponent
              component={View}
              className="flex-row justify-center items-center"
            >
              <StyledComponent
                component={Text}
                className="text-lg font-bold text-gray-500"
              >
                No more feeds
              </StyledComponent>
            </StyledComponent>
          ) : (
            <StyledComponent
              component={TouchableOpacity}
              className="flex-row justify-center items-center  rounded-md"
            >
              <StyledComponent
                component={View}
                className="bg-blue-500 font-semibold  px-4 py-2 rounded-md"
              >
                <StyledComponent
                  component={Text}
                  className="text-base font-bold text-white"
                  onPress={handleLoadMore}
                >
                  Load more
                </StyledComponent>
              </StyledComponent>
            </StyledComponent>
          )
        }
      /> */}
    </StyledComponent>
  );
};

export default HomeScreen;
