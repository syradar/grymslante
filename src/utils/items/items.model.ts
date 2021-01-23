interface BaseItem {
  name: string;
  tradeValue: number;
}

export interface SpecialItem extends BaseItem {
  type: string;
  special?: string;
  weightInKg?: number;
}
