import React, { useState } from 'react';
import './FAQSection.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { question: 'How can I apply for a scheme?', answer: 'You can apply through the official government portal or through our guided scheme finder service.' },
  { question: 'What documents are required for application?', answer: 'Typically, identity proof, address proof, and income certificates are required. Requirements vary by scheme.' },
  { question: 'Who is eligible for the central schemes?', answer: 'Eligibility depends on criteria like income level, occupation, and social category as defined by the scheme.' },
  { question: 'How long does the application process take?', answer: 'Processing time varies per scheme, but most are completed within 2–4 weeks.' },
  { question: 'Can I apply for multiple schemes simultaneously?', answer: 'Yes, you can apply for multiple schemes as long as you meet the eligibility criteria for each.' },
  { question: 'What should I do if my application is rejected?', answer: 'You can appeal the decision or correct errors and reapply. Detailed guidance is available in the application status section.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            {faq.question}
            <span className="faq-icon">
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
