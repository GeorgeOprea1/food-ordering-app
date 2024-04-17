import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await request.json();
  let cartProducts = data.cartProducts;
  const lineItems = cartProducts.map((product) => ({
    price: product.price_id,
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cart",
  });

  return NextResponse.json({
    message: "Checkout successful",
    sessionURL: session.url,
  });
}
