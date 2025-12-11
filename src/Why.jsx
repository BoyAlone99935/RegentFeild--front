import React from 'react'
 import { LuShield, LuTrendingUp, LuWallet, LuHeadphones } from "react-icons/lu";
 import { motion } from 'framer-motion';
 import './styles/Why.css'
function Why() {
 

  const reasons = [
  {
    id: 1,
    title: "Unmatched Security",
    description:
      "Your money and data are protected with industry-leading security. Sleep easy knowing your finances are in safe hands.",
    icon: LuShield,
  },
  {
    id: 2,
    title: "Proven Wealth Growth",
    description:
      "Our expert team combines experience and insight to help your investments grow steadily while minimizing risk.",
    icon: LuTrendingUp,
  },
  {
    id: 3,
    title: "Instant Access to Funds",
    description:
      "Withdraw your earnings anytime, hassle-free. Transparent, flexible access means your money works for you, always.",
    icon: LuWallet,
  },
  {
    id: 4,
    title: "Expert Support, Always",
    description:
      "Our dedicated advisors guide you at every step making banking and investing effortless, smart, and stress-free.",
    icon: LuHeadphones,
  },
];
  return (
  <section className="why-section">
    <p  className="why-heading">Why Choose Us</p>
    <div className="why-grid">
      {reasons.map((reason, index) => (
        <motion.div
          key={reason.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="why-card"
        >
          <reason.icon className="why-icon" />
          <h3 className="why-title">{reason.title}</h3>
          <p className="why-description">{reason.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
}

export default Why
