"use client";

import { useState } from "react";

type ContactFormProps = {
  services: Array<{ value: string; label: string }>;
  defaultService?: string;
};

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

export function ContactForm({ services, defaultService = "" }: ContactFormProps) {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting", message: "Enviando consulta..." });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const payload = (await response.json()) as { ok: boolean; message: string };

    if (!response.ok || !payload.ok) {
      setState({
        status: "error",
        message: payload.message || "No pudimos enviar tu consulta. Intenta nuevamente.",
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: payload.message,
    });
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="service">Tramite</label>
          <select id="service" name="service" defaultValue={defaultService} required>
            <option value="">Selecciona un tramite</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="preferredContact">Preferencia de contacto</label>
          <select id="preferredContact" name="preferredContact" defaultValue="whatsapp" required>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
            <option value="telefono">Telefono</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="name">Nombre y apellido</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefono</label>
          <input id="phone" name="phone" autoComplete="tel" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field honeypot-field">
          <label htmlFor="company">Empresa</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Consulta</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Contanos brevemente que tramite necesitas y cualquier dato relevante."
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="button button-primary" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? "Enviando..." : "Enviar consulta"}
        </button>
        <p
          className={`form-feedback ${
            state.status === "success" ? "is-success" : state.status === "error" ? "is-error" : ""
          }`}
          aria-live="polite"
        >
          {state.message || "Respondemos consultas dentro de 24 a 48 hs habiles."}
        </p>
      </div>
    </form>
  );
}
