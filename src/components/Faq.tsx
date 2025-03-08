
import React, { useState } from 'react';
import { HelpCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqItems = [
    {
      question: "What areas of law does Law Suvidha specialize in?",
      answer: "Law Suvidha specializes in family law, corporate law, criminal law, and labour law. Our experienced attorneys provide comprehensive legal services across these practice areas to meet diverse client needs."
    },
    {
      question: "How can I schedule a consultation with a lawyer?",
      answer: "You can schedule a consultation by calling our office, using the chat feature on our website, or filling out the contact form. We offer both in-person and virtual consultations to accommodate your schedule."
    },
    {
      question: "What information should I prepare for my first consultation?",
      answer: "For your first consultation, please bring any relevant documents related to your case, a timeline of events, contact information of involved parties, and a list of questions you'd like to ask. This helps us provide more accurate guidance."
    },
    {
      question: "How much do your legal services cost?",
      answer: "Our fees vary depending on the nature and complexity of your case. We offer transparent pricing and will discuss all potential costs during your initial consultation. We also provide flexible payment options for many services."
    },
    {
      question: "Do you offer pro bono legal services?",
      answer: "Yes, Law Suvidha is committed to community service and allocates a portion of our resources to pro bono cases. Eligibility is determined case by case based on financial need and case merit."
    },
    {
      question: "How long will my legal matter take to resolve?",
      answer: "The timeline varies significantly depending on the type of case, complexity, court schedules, and whether settlement is possible. During your consultation, we can provide an estimated timeline based on similar cases we've handled."
    },
    {
      question: "Can I switch to Law Suvidha if I already have another lawyer?",
      answer: "Yes, you have the right to change legal representation at any time. We can guide you through this transition process to ensure it's handled professionally and with minimal disruption to your case."
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* FAQ button */}
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-black text-white shadow-lg h-14 w-14 rounded-full"
      >
        <HelpCircle className="h-6 w-6" />
      </Button>

      {/* FAQ modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden animate-scale-in">
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-64px)]">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-1">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold text-lg mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-4">Our team is here to help. Contact us directly or use our chat support for personalized assistance.</p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => setIsOpen(false)} className="bg-black text-white">
                    Contact Us
                  </Button>
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
