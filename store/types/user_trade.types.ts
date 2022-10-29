import { IUserDocument } from './user.types';
import { ITipDocument } from './feed.types';
import { IPortfolioDocument } from './portfolio.types';

export type BrokerAccountType = 'Zerodha' | 'Angelone';
export type EntryOrExitType = 'Entry' | 'Exit';

export interface IUserTrade {
  _id: string;
  userId: string & IUserDocument;
  brokerAccount: String;
  status: String;
  refId: string & ITipDocument & IPortfolioDocument;
  refType: string;
  entryOrExit: EntryOrExitType;
  createdAt: Date;
  updatedAt: Date;
}
