import React from 'react'
import { useLocation } from 'react-router-dom'
import { formatDate2 } from './FormattDate'
import { FaExclamation, FaFileExport } from 'react-icons/fa'
import './styles/History.css'
import { ArrowDown, ArrowLeft, ArrowUp, ChevronDown, ChevronUp, Download, DownloadCloud, Share2 } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from './AuthContext'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function TransactionDetails() {
  const location = useLocation()
  const details = location.state.tx
  console.log(details)
  let charge = 0
  if (details.amount > 100000) {
  charge = 25;
  } else if (details.amount > 1000) {
    charge = 10;
  }
  const [open , setOpen] = useState(false)
  const totalDebit = details.amount + charge
  const {user} = useAuth()
  const downloadReceipt = async () => {
  const element = document.querySelector(".transaction-details-container");

  if (!element) return;

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`receipt-${details._id}.pdf`);
};

  return (
    <div className='transaction-details-container'>
      <div className='navigate'>
        <ArrowLeft size={17}/>
        <span>Transaction Details</span>
        <div></div>
      </div>
      <div className='like-bal'>
        <span className='details-type'>{details.type === 'Debit' ? <ArrowUp size={13}/> : <ArrowDown size={13}/>}{details.type}</span>
        <div>
          <span className='det-amount'>${details.amount.toLocaleString()}.00</span>
          <span className='sucessful'>Sucessful</span>
        </div>
        <span className='det-date'>{formatDate2(details.createdAt)}</span>
      </div>
      <div className='expt'>
        <button onClick={downloadReceipt}><Share2 size={17} className='share2'/>Export</button>
        <button><Download size={17} className='download'/> Download</button>
      </div>
     {
      details.type === 'Debit' &&  <div className='ncredited'>
        <FaExclamation/>
        <span>Beneficiary not credited?</span>
      </div>
     }

     {
      details.type === 'Debit' &&  <div className='for-debit'>
        <div className='bfaf'>
          <div className='right-border'>
            <span className='qst'>Balance Before</span>
            <span className='ans'>${details.before.toLocaleString()}.00</span>
          </div>
          <div>
            <span className='qst'>Balance After</span>
            <span className='ans'>${details.after.toLocaleString()}.00</span>
          </div>
        </div>

        <div className='goFlex'>
          <span>Transaction Amount</span>
          <span>${details.amount.toLocaleString()}.00</span>
        </div>

        <div className='goFlex'>
          <span>Charge</span>
          <span>
            ${charge}.00
          </span>
        </div>

        <div className='goFlex' style={{borderTop : ' rgba(228, 218, 218, 0.99)'}}>
          <span style={{color : 'white'}}>Total Debit</span>
          <span style={{color : 'white'}}>${totalDebit.toLocaleString()}.00</span>
        </div>
      </div>
     }


      <div style={{marginTop : '1rem'}}>
         <div style={{display: 'flex' , alignItems : 'center' , justifyContent: 'space-between'}}>
           <span style={{fontSize : '0.8rem' , color: '#888' , fontWeight:'600'}}>Other Details</span>
           {
            open ?  <ChevronDown onClick={() => setOpen(!open)} size={17} color='orange'/> : <ChevronUp onClick={() => setOpen(!open)} size={17} color='orange'/>
           }
         </div>
         {
           open && <div className='other-details'>
              <div>
                <span className='qst'>Transaction Type</span>
                <span className='transf'>Transfer</span>
              </div>
             {
              details.type === 'Debit' &&  <div>
                <span className='qst'>Beneficiary</span>
                <span className='anss'>{details.beneficiary}</span>
              </div>
             }

              <div className='go'>
                <span className='qst'>Source</span>
                <span className='anss'>{
                  details.type === 'Debit' ? user.name : details.beneficiary
                  }</span>
              </div>

              <div>
                <span className='qst'>Source Institution</span>
                <span className='anss'>{
                  details.type === 'Debit' ? 'RegentFeild' : details.beneficiaryInstitution
               }</span>
              </div>

              <div>
                <span className='qst'>Transaction Date</span>
                <span className='anss'>{formatDate2(details.createdAt)}</span>
              </div>

              <div>
                <span className='qst'>Transaction Refrence</span>
                <span className='anss'>{details._id}</span>
              </div>
           </div>
         }
      </div>
    </div>
  )
}

export default TransactionDetails
