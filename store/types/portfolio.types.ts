type PremiumPortfolioTypes = 'FREE' | 'ONE_TIME' | 'SUBSCRIPTION';

type Strategies = {
  type: string;
}[];

export interface IPortfolioDocument {
  _id: string;
  name: string;
  strategies: Strategies;
  userId: string;
  isDeleted: boolean;
  premiumPortfolioType: PremiumPortfolioTypes;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPortfolioPerformance {
  portfolio_id: string;
  portfolio_name: string;
  is_premium: boolean;
  is_subscribed: boolean;
  expert_name: string;
  portfolio_composition: string;
  trades_frequency: number;
  capital_required: number;
  last_month_return: number;
  overall_return: number;
  created_at: Date;
  total_trades: number;
  expert_avatar: string | null;
  expert_username?: string;
}

export interface IPortfolioPerformanceStrategies {
  total_strategies: number;
  strategies: {
    portfolio_id: string;
    strategy_id: string;
    strategy_name: string;
  }[];
}

export interface IPortfolioPerformanceTopTrades {
  total_trades: number;
  trades: {
    strategy_id: string;
    trade_id: string;
    trade_name: string;
    trade_returns: number;
  }[];
}

export interface IPortfolioPerformanceLiveTrades {
  total_trades: number;
  trades: {
    trade_id: string;
    trade_name: string;
    trade_min_investment: number;
    trade_upside: number;
    strategy_id: string;
  }[];
}

export interface IPortfolioPerformanceRecentTrades {
  total_trades: number;
  trades: {
    strategy_id: string;
    trade_id: string;
    trade_name: string;
    trade_returns: number;
    trade_min_investment: number;
  }[];
}
