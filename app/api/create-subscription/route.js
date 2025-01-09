import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export const POST = async (request) => {
  const { id, email, firstName, lastName, orderId, price } =
    await request.json();

  try {
    let parameter = {
      transaction_details: {
        order_id: `ORDER-${orderId}`,
        gross_amount: price,
      },

      customer_details: {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
      enabled_payments: ["gopay", "bca_va", "bri_va"],
      user_id: id,
    };

    const token = await snap.createTransactionToken(parameter);

    return NextResponse.json({
      token,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
