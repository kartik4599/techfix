import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="px-4 py-12 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
      <div className="text-center">
        <Mail className="mx-auto mb-2 text-[#629550] dark:text-[#a1ee87]" />
        <p className="font-bold text-[#111b0e] dark:text-white">Email</p>
        <p className="text-[#629550] dark:text-[#a1ee87]">
          info@techskillsacademy.com
        </p>
      </div>
      <div className="text-center">
        <Phone className="mx-auto mb-2 text-[#629550] dark:text-[#a1ee87]" />
        <p className="font-bold text-[#111b0e] dark:text-white">Phone</p>
        <p className="text-[#629550] dark:text-[#a1ee87]">+91 98765 43210</p>
      </div>
      <div className="text-center">
        <MapPin className="mx-auto mb-2 text-[#629550] dark:text-[#a1ee87]" />
        <p className="font-bold text-[#111b0e] dark:text-white">Address</p>
        <p className="text-[#629550] dark:text-[#a1ee87]">Ahmedabad, India</p>
      </div>
    </section>
  );
}
