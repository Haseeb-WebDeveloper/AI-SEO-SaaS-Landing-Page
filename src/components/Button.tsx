import React from "react";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className="hover:scale-[.98] transition ease-in-out  text-white relative px-8 py-2.5 rounded-2xl font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#6a1fd9] shadow-[0px_0px_12px_#2b026a]">
      <div className="absolute inset-0">
        <div className="rounded-3xl absolute border border-white/10 inset-0 [mask-image:linear-gradient(to-bottom,black,transparent)]"></div>
        <div className="rounded-3xl absolute border border-white/10 inset-0 [mask-image:linear-gradient(to-top,black,transparent)]"></div>
        <div className="rounded-3xl absolute border border-white/10 inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></div>
      </div>
      <span className="capitalize text-sm font-normal">{text}</span>
    </button>
  );
}

export default Button;
