"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type Values = { name: string; email: string; company: string; subject: string; message: string };

export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", company: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function validate() {
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Please add a subject.";
    if (values.message.trim().length < 20) next.message = "Please provide at least 20 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("ready");
  }

  const field = (key: keyof Values) => ({
    value: values[key],
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues({ ...values, [key]: event.target.value }),
    "aria-invalid": Boolean(errors[key]),
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(16,27,53,.07)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field"><span>Name <b>*</b></span><input {...field("name")} type="text" placeholder="Your name" />{errors.name && <small>{errors.name}</small>}</label>
        <label className="field"><span>Email <b>*</b></span><input {...field("email")} type="email" placeholder="you@company.com" />{errors.email && <small>{errors.email}</small>}</label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="field"><span>Company</span><input {...field("company")} type="text" placeholder="Company name" /></label>
        <label className="field"><span>Subject <b>*</b></span><input {...field("subject")} type="text" placeholder="How can we help?" />{errors.subject && <small>{errors.subject}</small>}</label>
      </div>
      <label className="field mt-5"><span>Message <b>*</b></span><textarea {...field("message")} rows={6} placeholder="Tell us about your project, goals or challenge." />{errors.message && <small>{errors.message}</small>}</label>
      <button type="submit" className="button-primary mt-6 w-full sm:w-auto">Send Project Inquiry <Send size={16} /></button>
      {status === "ready" && <p className="mt-5 rounded-xl bg-[#EFF6FF] px-4 py-3 text-sm leading-6 text-navy" role="status">Your inquiry passed validation. This form is ready for a secure email or API integration and is not currently sending messages.</p>}
    </form>
  );
}
