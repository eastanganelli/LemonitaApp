export interface tPerson   { name_: string; data: Array<tItem>; }
export interface tItem     { name: string; count:number; price: number; }
export interface tPPParEq  { name: string; amount: number; tip: number; total: number; }
export interface tTipData  { totalAmount: number; totalTip: number; totalTipDiv: number; total_: number; TipDiv: number; }
export interface tHistory  { historial: Array<tCache>; }
export interface tCache    { time_: number; personas: Array<tPerson>; }
export interface tSettings { lang_: string; theme_: string; cMode: boolean }
export interface tppArr    { ppArr: Array<tPPParEq>; data: tTipData }