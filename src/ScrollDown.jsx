
import { FaLongArrowAltDown } from "react-icons/fa";

export default function ScrollButtons() {
  
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div>
        <div>
          <button onClick={scrollToBottom} className="down">
            <FaLongArrowAltDown fontSize={'1rem'}/>
          </button>
        </div>
    </div>
  );
}


