import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleChoice: () => void;
  isActive: boolean;
}

export function Button({ children, handleChoice, isActive }: ButtonProps) {
  return (
    <button
      className={`bg-[#6097BE]
          m-4
          w-24
          text-white
          rounded
          hover:bg-blue-700
          transition
          ease-in-out
          duration-300
          ${isActive ? "bg-[#112d40]" : ""}`}
      onClick={() => handleChoice()}
    >
      {children}
    </button>
  );
}
