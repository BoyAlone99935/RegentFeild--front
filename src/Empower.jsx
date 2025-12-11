import React from 'react'
import './styles/Empower.css'
function Empower() {
  const offers = [
  {
    title: "Individual Investors",
    description:
      "Explore a wide array of investment opportunities, from single-asset crypto exposure to expertly crafted diversified portfolios designed to grow your wealth.",
  },
  {
    title: "Financial Advisors",
    description:
      "Access cutting-edge research, insights, and tools that empower advisors to guide their clients confidently in the evolving world of crypto and digital assets.",
  },
  {
    title: "Institutional Investors",
    description:
      "Since 2013, we’ve provided institutional investors with secure, professional-grade solutions for entering and thriving in the crypto market.",
  },
];
  return (
    <div style={{padding : '2rem' }} className='empower'>
      <p style={{ marginTop : '2rem' , fontSize : '3rem' , borderBottom : '1px solid #334155', paddingBottom : '5rem'}} className='head'>Who We Empower</p>
      {
        offers.map((offer, index) => (
          <div key={index} style={{ marginBottom: '2rem' }} className='offer'>
            <p style={{fontSize : '2rem',  width : '400px'}}>{offer.title}</p>
            <p style={{ lineHeight : '2.5rem' , width : '600px'}}>{offer.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Empower
