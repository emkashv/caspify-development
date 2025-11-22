"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownLeft, Copy, Check } from "lucide-react";

interface ReceiveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReceiveModal({ open, onOpenChange }: ReceiveModalProps) {
  const [currency, setCurrency] = useState("btc");
  const [copied, setCopied] = useState(false);

  const addresses: Record<string, string> = {
    btc: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    eth: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    usdt: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    bnb: "bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2",
    sol: "7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(addresses[currency]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ArrowDownLeft className="h-5 w-5 text-primary" />
            Receive Cryptocurrency
          </DialogTitle>
          <DialogDescription>
            Share your wallet address to receive crypto
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="receive-currency">Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger id="receive-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                <SelectItem value="usdt">Tether (USDT)</SelectItem>
                <SelectItem value="bnb">Binance Coin (BNB)</SelectItem>
                <SelectItem value="sol">Solana (SOL)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Your Address</Label>
            <div className="rounded-lg border bg-muted p-4">
              <p className="break-all font-mono text-sm">{addresses[currency]}</p>
            </div>
          </div>
          <div className="rounded-lg bg-primary/10 p-4">
            <p className="text-xs text-muted-foreground">
              Only send {currency.toUpperCase()} to this address. Sending any other cryptocurrency may result in permanent loss.
            </p>
          </div>
        </div>
        <Button className="w-full" onClick={handleCopy}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Address
            </>
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
