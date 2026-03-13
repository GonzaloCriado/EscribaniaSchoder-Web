import { NextResponse } from "next/server";

import { deliverInquiry } from "@/lib/contact";
import { contactInquirySchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactInquirySchema.safeParse(payload);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Revisa los datos del formulario.";
      return NextResponse.json({ ok: false, message: firstError }, { status: 400 });
    }

    if (parsed.data.company) {
      return NextResponse.json({ ok: true, message: "Consulta recibida." });
    }

    const result = await deliverInquiry({
      service: parsed.data.service,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      preferredContact: parsed.data.preferredContact,
      message: parsed.data.message,
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { ok: false, message: "No pudimos procesar tu consulta en este momento. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
