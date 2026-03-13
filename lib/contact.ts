import type { ContactInquiry } from "@/lib/types";

type DeliveryResult = {
  ok: boolean;
  message: string;
};

async function sendToWebhook(inquiry: ContactInquiry) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    return {
      ok: true,
      message: "Consulta recibida.",
    } satisfies DeliveryResult;
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inquiry),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Webhook delivery failed");
  }

  return {
    ok: true,
    message: "Consulta recibida.",
  } satisfies DeliveryResult;
}

export async function deliverInquiry(inquiry: ContactInquiry) {
  console.info("Nueva consulta de contacto", inquiry);
  return sendToWebhook(inquiry);
}
