import React from 'react';
import Stripe from 'stripe';
import { CustomerPortal, StripeCheckout, StripeUser } from '../types.db';

// This is used to create a Stripe Checkout for one-time payments. It's usually triggered with the <ButtonCheckout /> component. Webhooks are used to update the user's state in the database.
export async function createCheckout({
  priceId,
  successUrl,
  cancelUrl,
  couponId,
  clientReferenceId,
  user,
}: StripeCheckout) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const userParam: StripeUser = {};

  if (user?.customerId) {
    userParam.customer = user.customerId;
  } else {
    userParam.customer_creation = 'always';
    if (user?.email) {
      userParam.customer_email = user.email;
    }
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    ...userParam,
    invoice_creation: { enabled: true },
    tax_id_collection: { enabled: true },
    client_reference_id: clientReferenceId,
    payment_intent_data: { setup_future_usage: 'on_session' },
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    discounts: couponId
      ? [
          {
            coupon: couponId,
          },
        ]
      : [],
    success_url: successUrl,
    cancel_url: cancelUrl,
  } as Stripe.Checkout.SessionCreateParams);

  return stripeSession.url;
}

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export const createCustomerPortal: React.FC<CustomerPortal> = async ({
  customerId,
  returnUrl,
}) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    return portalSession.url;
  } catch (e) {
    console.error(e);
    return null;
  }
};

// This is used to get the uesr checkout session and populate the data so we get the planId the user subscribed to
export const findCheckoutSession = async ({ id }: { id: string }) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const session = (await stripe.checkout.sessions.retrieve(id, {
      expand: ['line_items'],
    })) as Stripe.Checkout.Session;

    return session;
  } catch (e) {
    console.error(e, 'findCheckoutSession ERROR 400');
    return null;
  }
};
