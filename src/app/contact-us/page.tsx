import ContactForm from "@/feature/contact-us/components/ContactForm";
import ContactHero from "@/feature/contact-us/components/ContactHero";
import ContactInfo from "@/feature/contact-us/components/ContactInfo";

const Page = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm  />
      <ContactInfo />
    </div>
  );
};

export default Page;
