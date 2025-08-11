"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#111b0e] p-6 rounded-xl shadow max-w-xl mx-auto space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1 text-[#111b0e] dark:text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#d6e6d1] dark:border-[#1f291d] bg-[#f9fbf8] dark:bg-[#0f150d] p-3"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-[#111b0e] dark:text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#d6e6d1] dark:border-[#1f291d] bg-[#f9fbf8] dark:bg-[#0f150d] p-3"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-[#111b0e] dark:text-white">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-[#d6e6d1] dark:border-[#1f291d] bg-[#f9fbf8] dark:bg-[#0f150d] p-3"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-[#50df20] text-[#111b0e] dark:bg-[#629550] dark:text-white"
      >
        Send Message
      </Button>
    </form>
  );
}
