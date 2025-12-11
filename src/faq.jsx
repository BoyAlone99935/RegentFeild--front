import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles/faq.css"; 

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How secure are my funds with your platform?",
      answer:
        "We use bank-level encryption, multi-layered firewalls, and regular third-party security audits to ensure your funds remain completely safe. Additionally, we partner with top custodians who insure assets against theft or hacking attempts, giving you peace of mind that your investments are always protected.",
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "Our platform is designed to be accessible to everyone, so the minimum investment amount is set very low, starting at just $50. This allows beginners to get started while still offering room for seasoned investors to diversify with larger amounts. No hidden fees or charges are added to your deposits.",
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer:
        "Yes, you have full control over your money. Withdrawals can be made 24/7, and most requests are processed instantly or within 24 hours depending on the bank or payment provider. There are no unnecessary restrictions or lock-in periods unless you specifically choose long-term investment plans for higher yields.",
    },
    {
      question: "How do you generate returns for investors?",
      answer:
        "We combine diversified trading strategies, including cryptocurrency, stocks, and forex, with automated AI-powered systems that reduce risks and maximize profitability. Additionally, our in-house financial analysts monitor markets daily, making real-time adjustments to keep your portfolio ahead of market trends.",
    },
    {
      question: "Are there any hidden fees I should know about?",
      answer:
        "Transparency is at the heart of our operations. We do not charge hidden fees — no deposit charges, no surprise deductions. Our only applicable fees are clearly stated, such as minimal transaction or management fees, which are industry-standard and reinvested into improving our platform’s performance and security.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div>
        <h2 className="faq-title">Quick Insights: 5 Things to Understand in 5 Minutes</h2>
        <span style={{color : 'grey' , paddingBottom : '10rem' , fontStyle : 'italic'}}> Review before continuing.</span>
      </div>
     <div className="inner-cont">
       {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className="question">{faq.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="faq-icon" />
            ) : (
              <FaChevronDown className="faq-icon" />
            )}
          </button>
          <div
            className={`faq-answer ${
              openIndex === index ? "open" : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Faq;