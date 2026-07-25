import { Request, Response, NextFunction } from 'express';

export function x402PaymentMiddleware(req: Request, res: Response, next: NextFunction) {
  const paymentHeader = req.headers['x-402-payment'] || req.headers['authorization'];

  // যদি পেমেন্ট বা সাইন হেডার না থাকে, তবে x402 পেমেন্ট চ্যালেঞ্জ পাঠাবে
  if (!paymentHeader) {
    return res.status(402).json({
      error: "Payment Required",
      protocol: "x402",
      message: "Micro-payment required to access this AI feature.",
      paymentDetails: {
        address: "0xYourWalletOrContractAddressHere",
        amount: "0.001",
        currency: "USDC/ETH",
        challengeId: "ch_" + Math.random().toString(36.substring(2, 9))
      }
    });
  }

  // পেমেন্ট ভ্যালিডেশন সফল হলে নেক্সট প্রসেসে যাবে
  // (এখানে ট্রানজেকশন হ্যাশ বা সিগনেচার ভেরিফাই করার লজিক বসাতে পারেন)
  next();
}
