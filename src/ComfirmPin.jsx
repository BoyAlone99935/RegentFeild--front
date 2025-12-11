

import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";

function ComfirmPinInput() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const { comfirmPin, setComfirmPin } = useAuth();
  const inputsRef = useRef([]);

  useEffect(() => {
    const fullPin = pin.join("");
    setComfirmPin(fullPin);
    console.log(fullPin);
  }, [pin, setComfirmPin]);

  const handleChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (pin[index] === "") {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
          const newPin = [...pin];
          newPin[index - 1] = "";
          setPin(newPin);
        }
      } else {
        const newPin = [...pin];
        newPin[index] = "";
        setPin(newPin);
      }
    }
  };

  return (
    <div className="pin-container">
      <div className="pin-inputs">
        {pin.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="pin-input"
          />
        ))}
      </div>
    </div>
  );
}

export default ComfirmPinInput;
