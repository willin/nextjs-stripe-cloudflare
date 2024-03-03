import type { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { getRequestContext } from '@cloudflare/next-on-pages';
import Stripe from 'stripe';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { env, cf, ctx } = getRequestContext();
  const stripe = new Stripe(env.STRIPE_PRIVATE_KEY);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt'
          },
          unit_amount: 2000
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/api/success',
    cancel_url: 'http://localhost:3000/api/cancel'
  });
  console.log(JSON.stringify(session, null, 2));
  redirect(session.url!);
}

/**

{
  "id": "cs_test_a1WW1DelXijVoLRabQgZFiKm0emvqEStX7WlFjmwjwUu8naYDcBI2UwB8P",
  "object": "checkout.session",
  "after_expiration": null,
  "allow_promotion_codes": null,
  "amount_subtotal": 2000,
  "amount_total": 2000,
  "automatic_tax": {
    "enabled": false,
    "liability": null,
    "status": null
  },
  "billing_address_collection": null,
  "cancel_url": "http://localhost:3000/api/cancel",
  "client_reference_id": null,
  "client_secret": null,
  "consent": null,
  "consent_collection": null,
  "created": 1709450363,
  "currency": "usd",
  "currency_conversion": null,
  "custom_fields": [],
  "custom_text": {
    "after_submit": null,
    "shipping_address": null,
    "submit": null,
    "terms_of_service_acceptance": null
  },
  "customer": null,
  "customer_creation": "if_required",
  "customer_details": null,
  "customer_email": null,
  "expires_at": 1709536763,
  "invoice": null,
  "invoice_creation": {
    "enabled": false,
    "invoice_data": {
      "account_tax_ids": null,
      "custom_fields": null,
      "description": null,
      "footer": null,
      "issuer": null,
      "metadata": {},
      "rendering_options": null
    }
  },
  "livemode": false,
  "locale": null,
  "metadata": {},
  "mode": "payment",
  "payment_intent": null,
  "payment_link": null,
  "payment_method_collection": "if_required",
  "payment_method_configuration_details": {
    "id": "pmc_1L0f9MAZ3ftDWrKu7PdmZMop",
    "parent": null
  },
  "payment_method_options": {
    "card": {
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card"
  ],
  "payment_status": "unpaid",
  "phone_number_collection": {
    "enabled": false
  },
  "recovered_from": null,
  "setup_intent": null,
  "shipping_address_collection": null,
  "shipping_cost": null,
  "shipping_details": null,
  "shipping_options": [],
  "status": "open",
  "submit_type": null,
  "subscription": null,
  "success_url": "http://localhost:3000/api/success",
  "total_details": {
    "amount_discount": 0,
    "amount_shipping": 0,
    "amount_tax": 0
  },
  "ui_mode": "hosted",
  "url": "https://checkout.stripe.com/c/pay/cs_test_a1WW1DelXijVoLRabQgZFiKm0emvqEStX7WlFjmwjwUu8naYDcBI2UwB8P#fidkdWxOYHwnPyd1blpxYHZxWjA0TjZmX2xEXzZjcUFSd05wTH10TTZwZ1dnZ1FAMlc0UWNvcjM0dWtwMXZdaFV%2FfHJnb398V0hXYmZLNVI1QlI9Vkd1fH1HTWhiTHNGMFU8MXZ0TGNEUjdVNTVnRF1maXdPXCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
}

 */
