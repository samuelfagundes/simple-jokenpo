import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  handleChoice: () => void
}

export function Button({ children, handleChoice }: ButtonProps) {
  return (
    <button className="bg-[#427AA1] m-2 w-24 text-white rounded hover:bg-blue-700 transition ease-in-out duration-300" onClick={() => handleChoice()}>{children}</button>
  )
}