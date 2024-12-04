export interface Trade {
    symbol: string;
    date: string;
    quantity: number;
    price: number;
    note: string; // Note added to Trade
  }
  
  export interface Position {
    symbol: string;
    quantity: number;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface DepotOverview {
    symbol: string;
    totalInvestment: number;
    currentValue: number;
    profitLoss: number;
  }
  
  export interface Analytics {
    totalTrades: number;
    totalInvested: number;
    totalProfitLoss: number;
    averageTradeValue: number;
  }
  
  export interface Note {
    id: string;
    title: string;
    content: string;
    date: string;
  }  