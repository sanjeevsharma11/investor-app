import { IInstrumentDocument } from './instrument.types';
import { IPortfolioDocument } from './portfolio.types';
import { IReactions } from './reaction.types';
import { IStrategyDocument } from './strategy.types';
import { IUserDocument } from './user.types';

export interface IFeed {
  _id: string;
  expert: {
    _id: string;
    name: string;
    avatar: string;
    rating: number;
    isCertified: boolean;
    return: number;
    hitRatio: number;
    username?: string;
  };
  premiumTradeType: string;
  transactionType: string;
  instrumentName: string;
  instrumentReturn: number;
  reason: string;
  minInvest: number;
  upsideInPercent: number;
  upsideInPrice: number;
  triggerLevel: string;
  triggerPriceLow: number;
  triggerPriceHigh: number;
  LTP: number;
  bullishOrBearish: string;
  exitDate: Date;
  reactions: IReactions[];
  reactionCount: number;
  shareCount: number;
  createdAt: Date;
  premiumTradePrice: number;
  hashtags: string;
  tradingViewStockName: string;
  isPremium: boolean;
}

export type IFeedUser = Pick<IUserDocument, '_id' | 'name' | 'createdAt'> & {
  avatar: string;
  expertReturn: number;
  hitRatio: number;
  tradeNumber: number;
  profit: number;
  username?: string;
};

export type IFeedPortfolio = Pick<IPortfolioDocument, '_id' | 'name'>;

export type IFeedStrategy = Pick<IStrategyDocument, '_id' | 'name'>;

export interface IFeedDocument {
  feed: ITipDocument;
  user: IFeedUser;
  portfolio: IFeedPortfolio;
  strategy: IFeedStrategy;
  feedReturn: number;
  bullishOrBearish: string;
  upsideInPercent: number;
  minInvestment: number;
  instrumentReturn: number;
}

type Visibility = 'public' | 'private';
type Status = 'live' | 'expired' | 'waiting';
type TriggerLevel = 'above' | 'below' | 'range' | 'market';
type PremiumTradeType = 'FREE' | 'PAID';
type Origin = 'extension' | 'admin' | 'expert' | 'bubble';
type AlertType =
  | 'target-hit'
  | 'stopLoss-hit'
  | 'expiry-hit'
  | 'trigger-level-hit';
type TransactionType = 'BUY' | 'SELL';

type ProfitLoss = {
  instrumentId: string;
  profitOrLoss: number;
}[];

type AllExits = {
  ltp: number;
  tipId: string;
  lotsExited: number;
  profitLoss: ProfitLoss;
  createdAt: Date;
  updatedAt: Date;
}[];

type Views = {
  anonymousUser: string;
  tipId: string;
}[];

type Alerts = {
  tipId: string;
  instrumentId: string;
  isLive: boolean;
  isSeen: boolean;
  ltp: number;
  qty: number;
  stopLoss: number[];
  target: number[];
  type: AlertType;
  isDeleted: boolean;
}[];

export interface ITipDocument {
  _id: string;
  userId: string & IUserDocument;
  visibility: Visibility;
  instrumentSymbol: string;
  qty: number;
  numberOfLots: number;
  totalNumberOfLots: number;
  instrumentId: string & IInstrumentDocument;
  priceAtRecommendation: number;
  reasonForRecommendation: string;
  target: number[];
  stopLoss: number[];
  activeTargetIndex: number;
  activeStopLossIndex: number;
  cmp: number;
  duration: Date;
  createDate: Date;
  profitLoss: ProfitLoss;
  realizedProfitLoss: ProfitLoss;
  unrealizedProfitLoss: ProfitLoss;
  transactionType: TransactionType;
  allExits: AllExits;
  status: Status;
  costPrice: number;
  views: Views;
  likes: [];
  dislikes: [];
  comments: [];
  listOfAlerts: Alerts;
  transactionCount: number;
  activeAlert: boolean;
  exitPrice: number;
  instrumentType: string;
  transactions: [];
  isDeleted: boolean;
  triggerLevel: TriggerLevel;
  triggerPriceLow: number;
  triggerPriceHigh: number;
  strikePrice: number;
  lotSize: number;
  chartName: string;
  chartLink: string;
  hashtags: string;
  exitTradePrice: number;
  trailingStopLoss: boolean;
  viewPrice: number;
  premiumTradeType: PremiumTradeType;
  origin: Origin;
  portfolioId: string & IPortfolioDocument;
  strategyId: string & IStrategyDocument;
  markerPrice: number;
  capitalRequired: number;
  maxProfit: number;
  maxLoss: number;
  createdAt: Date;
  updatedAt: Date;
}
