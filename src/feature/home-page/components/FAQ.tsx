import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
  {
    question: "How long does each course take to complete?",
    answer: "Course durations vary. The Basic Mobile Repair course typically takes 2-4 weeks, the Advanced Smartphone Repair course 4-6 weeks, and the Micro Soldering Techniques course 3-5 weeks. The exact duration depends on the learning pace and schedule chosen."
  },
  {
    question: "Do I need any prior experience to enroll?",
    answer: "Our courses are designed for individuals with varying levels of experience. The Basic Mobile Repair course requires no prior experience, while the Advanced Smartphone Repair and Micro Soldering Techniques courses require a basic understanding of electronics and mobile repair."
  },
  {
    question: "What kind of certification do I receive?",
    answer: "Upon successful completion of a course, you will receive an industry-recognized certificate from Stitch Design, which validates your skills and knowledge in mobile repair."
  },
  {
    question: "Are there job placement services?",
    answer: "We offer career guidance and support to help you find employment opportunities in the mobile repair industry. While we cannot guarantee placement, our certification is respected by employers."
  },
];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full mx-auto">
        {faqs.map((f, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-[#E63946]">
            <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-4 sm:py-6 hover:no-underline">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-relaxed pb-4 sm:pb-6 text-[#E63946]">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
