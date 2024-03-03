import type { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { env, cf, ctx } = getRequestContext();
  console.log(request.url);
  return Response.json({});
}

export async function POST(request: NextRequest) {
  const { env, cf, ctx } = getRequestContext();
  console.log(request.url);
  const res = await request.json();
  console.log(JSON.stringify(res, null, 2));
  return Response.json({ res });
}

/**

{
  "id": "evt_1Oq9MSAZ3ftDWrKuTBdpH074",
  "object": "event",
  "api_version": "2020-08-27",
  "created": 1709450487,
  "data": {
    "object": {
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
      "customer_details": {
        "address": {
          "city": null,
          "country": "HK",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "email": "i@sh.gg",
        "name": "WWW",
        "phone": null,
        "tax_exempt": "none",
        "tax_ids": []
      },
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
      "payment_intent": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP",
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
      "payment_status": "paid",
      "phone_number_collection": {
        "enabled": false
      },
      "recovered_from": null,
      "setup_intent": null,
      "shipping": null,
      "shipping_address_collection": null,
      "shipping_options": [],
      "shipping_rate": null,
      "status": "complete",
      "submit_type": null,
      "subscription": null,
      "success_url": "http://localhost:3000/api/success",
      "total_details": {
        "amount_discount": 0,
        "amount_shipping": 0,
        "amount_tax": 0
      },
      "ui_mode": "hosted",
      "url": null
    }
  },
  "livemode": false,
  "pending_webhooks": 2,
  "request": {
    "id": null,
    "idempotency_key": null
  },
  "type": "checkout.session.completed"
}
{
  "id": "evt_3Oq9MQAZ3ftDWrKu1ma3zFtK",
  "object": "event",
  "api_version": "2020-08-27",
  "created": 1709450487,
  "data": {
    "object": {
      "id": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP",
      "object": "payment_intent",
      "amount": 2000,
      "amount_capturable": 0,
      "amount_details": {
        "tip": {}
      },
      "amount_received": 2000,
      "application": null,
      "application_fee_amount": null,
      "automatic_payment_methods": null,
      "canceled_at": null,
      "cancellation_reason": null,
      "capture_method": "automatic",
      "charges": {
        "object": "list",
        "data": [
          {
            "id": "ch_3Oq9MQAZ3ftDWrKu1ZmRbQIJ",
            "object": "charge",
            "amount": 2000,
            "amount_captured": 2000,
            "amount_refunded": 0,
            "amount_updates": [],
            "application": null,
            "application_fee": null,
            "application_fee_amount": null,
            "balance_transaction": "txn_3Oq9MQAZ3ftDWrKu1moAHt2a",
            "billing_details": {
              "address": {
                "city": null,
                "country": "HK",
                "line1": null,
                "line2": null,
                "postal_code": null,
                "state": null
              },
              "email": "i@sh.gg",
              "name": "WWW",
              "phone": null
            },
            "calculated_statement_descriptor": "WWW.MOBSUGAR.IO",
            "captured": true,
            "created": 1709450487,
            "currency": "usd",
            "customer": null,
            "description": null,
            "destination": null,
            "dispute": null,
            "disputed": false,
            "failure_balance_transaction": null,
            "failure_code": null,
            "failure_message": null,
            "fraud_details": {},
            "invoice": null,
            "livemode": false,
            "metadata": {},
            "on_behalf_of": null,
            "order": null,
            "outcome": {
              "network_status": "approved_by_network",
              "reason": null,
              "risk_level": "normal",
              "risk_score": 13,
              "seller_message": "Payment complete.",
              "type": "authorized"
            },
            "paid": true,
            "payment_intent": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP",
            "payment_method": "pm_1Oq9MPAZ3ftDWrKuke634REA",
            "payment_method_details": {
              "card": {
                "amount_authorized": 2000,
                "brand": "visa",
                "checks": {
                  "address_line1_check": null,
                  "address_postal_code_check": null,
                  "cvc_check": "pass"
                },
                "country": "US",
                "exp_month": 11,
                "exp_year": 2028,
                "extended_authorization": {
                  "status": "disabled"
                },
                "fingerprint": "3gHl5uLmwTB9HIRs",
                "funding": "credit",
                "incremental_authorization": {
                  "status": "unavailable"
                },
                "installments": null,
                "last4": "4242",
                "mandate": null,
                "multicapture": {
                  "status": "unavailable"
                },
                "network": "visa",
                "network_token": {
                  "used": false
                },
                "overcapture": {
                  "maximum_amount_capturable": 2000,
                  "status": "unavailable"
                },
                "three_d_secure": null,
                "wallet": null
              },
              "type": "card"
            },
            "radar_options": {},
            "receipt_email": null,
            "receipt_number": null,
            "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSzNjWmlBWjNmdERXckt1KPjJkK8GMgZhPv_5laQ6LBYd9FbofNSkuOxzJWjp-5pGKggGBmjSAksKhagtKXM_GZqvjJz5uKI-dJ8b",
            "refunded": false,
            "refunds": {
              "object": "list",
              "data": [],
              "has_more": false,
              "total_count": 0,
              "url": "/v1/charges/ch_3Oq9MQAZ3ftDWrKu1ZmRbQIJ/refunds"
            },
            "review": null,
            "shipping": null,
            "source": null,
            "source_transfer": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "succeeded",
            "transfer_data": null,
            "transfer_group": null
          }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/charges?payment_intent=pi_3Oq9MQAZ3ftDWrKu1WqprhwP"
      },
      "client_secret": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP_secret_4xYNrVakbq4b8Ez8aKzpRrVaH",
      "confirmation_method": "automatic",
      "created": 1709450486,
      "currency": "usd",
      "customer": null,
      "description": null,
      "invoice": null,
      "last_payment_error": null,
      "latest_charge": "ch_3Oq9MQAZ3ftDWrKu1ZmRbQIJ",
      "livemode": false,
      "metadata": {},
      "next_action": null,
      "on_behalf_of": null,
      "payment_method": "pm_1Oq9MPAZ3ftDWrKuke634REA",
      "payment_method_configuration_details": null,
      "payment_method_options": {
        "card": {
          "installments": null,
          "mandate_options": null,
          "network": null,
          "request_three_d_secure": "automatic"
        }
      },
      "payment_method_types": [
        "card"
      ],
      "processing": null,
      "receipt_email": null,
      "review": null,
      "setup_future_usage": null,
      "shipping": null,
      "source": null,
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "succeeded",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "livemode": false,
  "pending_webhooks": 2,
  "request": {
    "id": "req_fpC2jsalYoZG5q",
    "idempotency_key": "af756db1-fbf9-414f-b502-664c4aab3b86"
  },
  "type": "payment_intent.succeeded"
}
{
  "id": "evt_3Oq9MQAZ3ftDWrKu105Dpr85",
  "object": "event",
  "api_version": "2020-08-27",
  "created": 1709450486,
  "data": {
    "object": {
      "id": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP",
      "object": "payment_intent",
      "amount": 2000,
      "amount_capturable": 0,
      "amount_details": {
        "tip": {}
      },
      "amount_received": 0,
      "application": null,
      "application_fee_amount": null,
      "automatic_payment_methods": null,
      "canceled_at": null,
      "cancellation_reason": null,
      "capture_method": "automatic",
      "charges": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges?payment_intent=pi_3Oq9MQAZ3ftDWrKu1WqprhwP"
      },
      "client_secret": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP_secret_4xYNrVakbq4b8Ez8aKzpRrVaH",
      "confirmation_method": "automatic",
      "created": 1709450486,
      "currency": "usd",
      "customer": null,
      "description": null,
      "invoice": null,
      "last_payment_error": null,
      "latest_charge": null,
      "livemode": false,
      "metadata": {},
      "next_action": null,
      "on_behalf_of": null,
      "payment_method": null,
      "payment_method_configuration_details": null,
      "payment_method_options": {
        "card": {
          "installments": null,
          "mandate_options": null,
          "network": null,
          "request_three_d_secure": "automatic"
        }
      },
      "payment_method_types": [
        "card"
      ],
      "processing": null,
      "receipt_email": null,
      "review": null,
      "setup_future_usage": null,
      "shipping": null,
      "source": null,
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "requires_payment_method",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "livemode": false,
  "pending_webhooks": 2,
  "request": {
    "id": "req_fpC2jsalYoZG5q",
    "idempotency_key": "af756db1-fbf9-414f-b502-664c4aab3b86"
  },
  "type": "payment_intent.created"
}
{
  "id": "evt_3Oq9MQAZ3ftDWrKu1uS1aAQv",
  "object": "event",
  "api_version": "2020-08-27",
  "created": 1709450487,
  "data": {
    "object": {
      "id": "ch_3Oq9MQAZ3ftDWrKu1ZmRbQIJ",
      "object": "charge",
      "amount": 2000,
      "amount_captured": 2000,
      "amount_refunded": 0,
      "amount_updates": [],
      "application": null,
      "application_fee": null,
      "application_fee_amount": null,
      "balance_transaction": "txn_3Oq9MQAZ3ftDWrKu1moAHt2a",
      "billing_details": {
        "address": {
          "city": null,
          "country": "HK",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "email": "i@sh.gg",
        "name": "WWW",
        "phone": null
      },
      "calculated_statement_descriptor": "WWW.MOBSUGAR.IO",
      "captured": true,
      "created": 1709450487,
      "currency": "usd",
      "customer": null,
      "description": null,
      "destination": null,
      "dispute": null,
      "disputed": false,
      "failure_balance_transaction": null,
      "failure_code": null,
      "failure_message": null,
      "fraud_details": {},
      "invoice": null,
      "livemode": false,
      "metadata": {},
      "on_behalf_of": null,
      "order": null,
      "outcome": {
        "network_status": "approved_by_network",
        "reason": null,
        "risk_level": "normal",
        "risk_score": 13,
        "seller_message": "Payment complete.",
        "type": "authorized"
      },
      "paid": true,
      "payment_intent": "pi_3Oq9MQAZ3ftDWrKu1WqprhwP",
      "payment_method": "pm_1Oq9MPAZ3ftDWrKuke634REA",
      "payment_method_details": {
        "card": {
          "amount_authorized": 2000,
          "brand": "visa",
          "checks": {
            "address_line1_check": null,
            "address_postal_code_check": null,
            "cvc_check": "pass"
          },
          "country": "US",
          "exp_month": 11,
          "exp_year": 2028,
          "extended_authorization": {
            "status": "disabled"
          },
          "fingerprint": "3gHl5uLmwTB9HIRs",
          "funding": "credit",
          "incremental_authorization": {
            "status": "unavailable"
          },
          "installments": null,
          "last4": "4242",
          "mandate": null,
          "multicapture": {
            "status": "unavailable"
          },
          "network": "visa",
          "network_token": {
            "used": false
          },
          "overcapture": {
            "maximum_amount_capturable": 2000,
            "status": "unavailable"
          },
          "three_d_secure": null,
          "wallet": null
        },
        "type": "card"
      },
      "radar_options": {},
      "receipt_email": null,
      "receipt_number": null,
      "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSzNjWmlBWjNmdERXckt1KPfJkK8GMgaSFOB_L6Y6LBYsJgXxeEkmm3jP_kBycWcH9ysRsk-T-qRW5WX10pKtklDHBmT-LIkTUFdG",
      "refunded": false,
      "refunds": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges/ch_3Oq9MQAZ3ftDWrKu1ZmRbQIJ/refunds"
      },
      "review": null,
      "shipping": null,
      "source": null,
      "source_transfer": null,
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "succeeded",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "livemode": false,
  "pending_webhooks": 2,
  "request": {
    "id": "req_fpC2jsalYoZG5q",
    "idempotency_key": "af756db1-fbf9-414f-b502-664c4aab3b86"
  },
  "type": "charge.succeeded"
}

*/
