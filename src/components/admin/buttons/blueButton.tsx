import React from "react";

type BlueButtonProps = {
  text: string; 
  onClick: () => void; 
  icon?: React.ElementType; 
};

export default function BlueButton({ text, onClick, icon: Icon }: BlueButtonProps) {
  return (
    <button
      className="bg-blueB text-white hover:brightness-75 py-3 px-8 rounded-lg"
      onClick={onClick}
    >
      <span className="flex flex-row gap-2 items-center">
        {Icon && <Icon className="text-2xl" />}
        <p className="text-lg">{text}</p>
      </span>
    </button>
  );
}
