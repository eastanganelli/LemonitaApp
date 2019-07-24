export interface tPerson  { name_: string; data: Array<tItem>; }
export interface tItem    { name: string; count:number; price: number; }
export interface tPPPar   { name: string; amount: number; tip: number; total: number; }
export interface tPPEq    { name: string; total: number; }
export interface tEqData  { totalAmount: number; totalTip: number; totalTipDiv: number; total_: number; }
export interface tParData { totalAmount: number; totalTip: number; TipEqDiv: number; total_: number; }
export interface tHistory { historial: Array<tCache>; }
export interface tCache   { time_: number; personas: Array<tPerson>; }