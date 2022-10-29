

export interface IExpertProfile {
  name: string;
  avatar: string;
  joiningDate: Date;
  bio: string;
  tags: string[];
  accuracy: number;
  overall: number;
  thirtyDayAvgForExpert: number;
  followers: number;
  rating: string | number;
  isFollowing: boolean;
  peopleInvested: {
    numberOfPeople: number;
    amount: number;
    investors: {
      name: string;
      avatar: string;
    }[]
  };
  socialLinks: {
    youtubeLink: string;
    twitterLink: string;
    profileVideoLink: string;
    websiteLink: string;
  }
}

export interface IExpertPerformance {
  totalTrades: number;
  avgProfit: number;
  avgLoss: number;
  instrumentTypeComposition: {
    EQ: number;
    CE: number;
    PE: number;
    FUT: number;
  };
  profitForInvestor: {
    amount: number;
    profitableMonth: number
  }
  topTrades: IExpertTopTrades['trades']
}

export interface IExpertTopTrades {
  trades: {
    _id: string;
    name: string;
    instrumentType: string;
    returns: number;
    investment: number;
    expertAvatar: string;
    premiumTradeType: string;
  }[];
  totalTrades: number;
}



export interface IExpertInvestment {
  recentTrades: IExpertRecentTrades['trades'];
  portfolios: {
    _id: string;
    name: string;
    returns: number;
    capitalRequired: number;
    expertAvatar: string;
  }[]
}

export interface IExpertRecentTrades {
  trades: {
    _id: string;
    name: string;
    instrumentType: string;
    returns: number;
    investment: number;
    expertAvatar: string;
    premiumTradeType: string
  }[];
  totalTrades: number;
}
