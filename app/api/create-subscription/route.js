import Midtrans from "midtrans-client";
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
  const { id, email, firstName, lastName, orderId, price } =
    await request.json();

  try {
    let parameter = {
      payment_type: "gopay",
      transaction_details: {
        gross_amount: price,
        order_id: orderId,
      },
      gopay: {
        enable_callback: true,
        callback_url: "https://creatorpal-ai.vercel.app/dashboard/billing",
      },
    };

    const charge = await core.charge(parameter);

    return NextResponse.json({
      charge,
    });

    // const token = await snap.createTransactionToken(parameter);

    // if (token.payment_options.token) {
    //   let subscriptionParameter = {
    //     name: "MONTHLY",
    //     amount: price,
    //     currency: "IDR",
    //     payment_type: "gopay",
    //     token: token.payment_options.token,
    //     schedule: {
    //       interval: 1,
    //       interval_unit: "month",
    //     },
    //     customer_details: {
    //       first_name: firstName,
    //       last_name: lastName,
    //       email: email,
    //     },
    //     gopay: {
    //       account_id: token.account_id,
    //     },
    //   };

    //   const subscription = await core.createSubscription(subscriptionParameter);

    //   // const subscriptionId = await core.getSubscription(subscription.id);

    //   return NextResponse.json({
    //     token,
    //     // subscriptionId,
    //   });
    // }
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
