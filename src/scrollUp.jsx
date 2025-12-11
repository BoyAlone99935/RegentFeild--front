
import { FaLongArrowAltUp } from "react-icons/fa";

export default function ScrollTop() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{backgroundColor : '#f8f9fa' , padding : '1rem'}}>
        <div>
          <button onClick={scrollToTop} className="down" >
            <FaLongArrowAltUp fontSize={'1rem'}/>
          </button>
        </div>
    </div>
  );
}


