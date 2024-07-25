export interface Tip {
    id: number;
    title: string;
    amount: number
    split: number;
    tipRate: number;
};

export const defaultTip: Tip = {
    id: 0,
    title: 'Default',
    amount: 0,
    split: 1,
    tipRate: 0
};