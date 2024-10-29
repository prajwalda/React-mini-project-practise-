import React, { useEffect, useRef } from "react";

const OtpInput = () => {
  const ref = useRef([]);

  const handleChange = (e, idx) => {
    const { value } = e.target;
    if (value.length === 1) {
      ref.current[idx+1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-7">
      {Array(4)
        .fill(null)
        .map((_, idx) => {
          return (
            <input
              ref={(el) => (ref.current[idx] = el)}
              onChange={(e) => handleChange(e,idx)}
              type="text"
              maxLength={1}
              className="p-2 w-8 border border-gray-500"
            />
          );
        })}
    </div>
  );
};

export default OtpInput;
