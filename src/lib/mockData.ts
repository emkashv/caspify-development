export interface Transaction {
  id: string;
  type: "send" | "receive";
  currency: string;
  amount: number;
  usdValue: number;
  address: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  balance: number;
  usdValue: number;
  price: number;
  change24h: number;
  icon: string;
  marketCap: number;
  volume24h: number;
  high24h: number;
  low24h: number;
}

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "receive",
    currency: "BTC",
    amount: 0.0234,
    usdValue: 1247.82,
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    date: "2024-01-15T10:30:00",
    status: "completed",
  },
  {
    id: "2",
    type: "send",
    currency: "ETH",
    amount: 1.5,
    usdValue: 3420.50,
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    date: "2024-01-14T15:45:00",
    status: "completed",
  },
  {
    id: "3",
    type: "receive",
    currency: "USDT",
    amount: 5000,
    usdValue: 5000,
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    date: "2024-01-13T09:20:00",
    status: "completed",
  },
  {
    id: "4",
    type: "send",
    currency: "BNB",
    amount: 3.2,
    usdValue: 876.80,
    address: "bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2",
    date: "2024-01-12T14:10:00",
    status: "completed",
  },
];

export const mockAssets: CryptoAsset[] = [
  {
    id: "1",
    symbol: "BTC",
    name: "Bitcoin",
    balance: 0.847,
    usdValue: 45234.89,
    price: 53421.76,
    change24h: 2.34,
    icon: "₿",
    marketCap: 1042000000000,
    volume24h: 28500000000,
    high24h: 54120.50,
    low24h: 52780.30,
  },
  {
    id: "2",
    symbol: "USDT",
    name: "Tether",
    balance: 15234.5,
    usdValue: 15234.50,
    price: 1.0,
    change24h: 0.01,
    icon: "₮",
    marketCap: 95800000000,
    volume24h: 52300000000,
    high24h: 1.001,
    low24h: 0.999,
  },
  {
    id: "3",
    symbol: "ETH",
    name: "Ethereum",
    balance: 5.234,
    usdValue: 11942.16,
    price: 2281.42,
    change24h: -1.23,
    icon: "Ξ",
    marketCap: 274000000000,
    volume24h: 15200000000,
    high24h: 2315.80,
    low24h: 2245.90,
  },
  {
    id: "4",
    symbol: "BNB",
    name: "Binance Coin",
    balance: 24.5,
    usdValue: 6714.50,
    price: 274.08,
    change24h: 3.45,
    icon: "⊙",
    marketCap: 42100000000,
    volume24h: 1850000000,
    high24h: 278.45,
    low24h: 268.20,
  },
];

export const generateChartData = (basePrice: number, points: number = 24) => {
  const data = [];
  let price = basePrice;
  
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * basePrice * 0.02;
    price = Math.max(price + change, basePrice * 0.8);
    data.push({
      time: i < 12 ? `${i}AM` : `${i - 12}PM`,
      price: Math.round(price * 100) / 100,
    });
  }
  
  return data;
};