
type RefType = 'Tip' | 'Basket' | 'Portfolio';
type Status = 'ACTIVE' | 'EXPIRED';
type PlanType = 'ONCE' | 'MONTHLY' | 'QUARTERLY' | 'HALF_YEARLY' | 'YEARLY';

export interface IPlanDocument {
  _id: string;
  planAmount: number;
  planType: PlanType;
  refId: string;
  refType: RefType;
  isMostPopular: boolean;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

