import Midtrans from "midtrans-client";
import moment from "moment/moment";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

let core = new Midtrans.CoreApi({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export const POST = async (request) => {
  const { id, orderId, price } = await request.json();

  let parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: price,
    },
    credit_card: {
      secure: true,
      save_card: true,
    },
    user_id: id,
  };

  const token = await snap.createTransactionToken(parameter);

  let subscriptionParameter = {
    name: "MONTHLY",
    amount: price,
    currency: "IDR",
    payment_type: "credit_card",
    token: token,
    schedule: {
      interval: 1,
      interval_unit: "month",
      start_time: moment().format("YYYY-MM-DD HH:mm:ss ZZ"),
    },
  };

  const subscription = await core.createSubscription(subscriptionParameter);

  const subscriptionId = await core.getSubscription(subscription.id);

  return NextResponse.json({
    token,
    subscriptionId,
  });
};
