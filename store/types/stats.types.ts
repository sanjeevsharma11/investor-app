export interface ITopTrade {
  username: string;
  userId: string;
  userProfileImage: string;
  tradingViewName: string;
  instrumentType: string;
  tipProfit: number;
  returnPercentage: number;
  tradeId: string;
  name: string;
  exitPrice: number;
  entryPrice: number;
  strikePrice?: number;
  tipStatus: string;
  transactionType: string;
  CMP: number;
};

export type ITopTradesArray = ITopTrade[];
export interface ITopPortfolioType {
  _id: string;
  portfolioId: string;
  portfolioName: string;
  returnPercentage: number;
  userName: string;
  name: string;
  userProfileImage: string;
}

export type ITopPortfoliosArray = ITopPortfolioType[];

export type IGetTopUsersReturnForAPeriod = {
  _id: string;
  returnPercentage: number;
  userName: string;
  name: string;
  userProfileImage: string;
  createdAt: Date;
  lastActive: Date;
};
