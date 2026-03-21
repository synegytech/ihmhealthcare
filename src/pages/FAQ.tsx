import React from 'react';

const faqs = [
  {
    question: "What is IHM Healthcare Foundation?",
    answer: "IHM Healthcare Foundation is a non-profit organization dedicated to advancing healthcare through compassion, innovation, and community support, particularly in underserved regions."
  },
  {
    question: "How can I donate?",
    answer: "You can donate through our 'Ways to Give' page using our secure online payment system or by contacting us for other donation methods."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, IHM Healthcare Foundation is a 501(c)(3) non-profit organization. Donations are tax-deductible to the extent allowed by law."
  },
  {
    question: "How can I volunteer?",
    answer: "Visit our 'Volunteer' page to see current opportunities and fill out the application form."
  }
];

export function FAQ() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-12 text-primary">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">{faq.question}</h3>
            <p className="text-primary/70 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
