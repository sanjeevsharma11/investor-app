type RefType = 'Tip' | 'Basket' | 'Portfolio';
type TxnType = 'received' | 'refund';
type SubscriptionType =
  | 'ONCE'
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'HALF_YEARLY'
  | 'YEARLY';

type SubscriptionStatus = 'ACTIVE' | 'EXPIRED';

export interface ISubscriptionDocument {
  _id: string;
  userId: string;
  refId: string;
  refType: RefType;
  planId: string;
  orderId: string;
  expertUser: string;
  txnId: number;
  txnType: TxnType;
  viewPrice: number;
  subscriptionType: SubscriptionType;
  status: SubscriptionStatus;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
