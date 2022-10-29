type Status = 'ACTIVE' | 'EXPIRED';

export interface IOrderDocument {
  refId: string;
  refType: string;
  planId: string;
  userId: string;
  orderToken: string;
  orderId: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}
