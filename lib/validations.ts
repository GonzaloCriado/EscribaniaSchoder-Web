import { z } from "zod";

export const contactInquirySchema = z.object({
  service: z.string().min(1, "Selecciona un tramite."),
  name: z.string().min(3, "Ingresa tu nombre y apellido."),
  email: z.string().email("Ingresa un email valido."),
  phone: z
    .string()
    .min(8, "Ingresa un telefono valido.")
    .regex(/^[0-9+\-\s()]+$/, "Ingresa un telefono valido."),
  preferredContact: z.enum(["whatsapp", "email", "telefono"]),
  message: z.string().min(10, "Contanos brevemente que necesitas."),
  company: z.string().optional().default(""),
});
