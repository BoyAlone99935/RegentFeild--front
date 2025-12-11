import React from "react";
import "./styles/Spinner.css";

const Spinner = ({message , message2}) => {
  return (
    <div className="spinner-overlay">
     
      <div className="slim-spinner"></div>
      {
        message && <p style={{textAlign : 'center' , fontSize : '0.8rem' , color : 'white' , marginTop : '1.2rem'}}>{message}</p>
      }
      {
        message2 &&  <p style={{textAlign : 'center' , fontSize : '0.8rem' , color : 'white' , marginTop : '0.5rem'}}>{message2}</p>
      }
    </div>
  );
};

export default Spinner;
