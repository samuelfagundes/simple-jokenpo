import { useState } from "react";
import { Button } from "./Components/button";
import "./styles/main.css";

export function App() {
  const [choice, setChoice] = useState("");
  const [cpuChoice, setCPUChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [isResultHidden, setIsResultHidden] = useState(true);

  function handleChoice(chosenOne: string) {
    setChoice(chosenOne)
    setIsResultHidden(true)
    computerChoice()
  }

  function computerChoice() {
    let shuffleChoice = Math.ceil(Math.random() * 3);
    if (shuffleChoice === 1) {
      setCPUChoice("Rock");
    } else if (shuffleChoice === 2) {
      setCPUChoice("Paper");
    } else {
      setCPUChoice("Scissors");
    }
  }

  function getWinner() {
    setIsResultHidden(false)
    if (
      (choice === "Rock" && cpuChoice === "Scissors") ||
      (choice === "Paper" && cpuChoice === "Rock") ||
      (choice === "Scissors" && cpuChoice === "Paper")
    ) {
      setWinner('Player')
    } else if (
      (choice === "Rock" && cpuChoice === "Paper") ||
      (choice === "Paper" && cpuChoice === "Scissors") ||
      (choice === "Scissors" && cpuChoice === "Rock")
    ) {
      setWinner('Computer')
    } else if (
      (choice === "Rock" && cpuChoice === "Rock") ||
      (choice === "Paper" && cpuChoice === "Paper") ||
      (choice === "Scissors" && cpuChoice === "Scissors")
    ) {
      setWinner('Draw')
    }
    setChoice('')
  }

  return (
    <div className="w-[1024px]">
      <h1 className="font-bold text-2xl mx-auto my-4 flex justify-center">
        Jokenpo
      </h1>
      <section className="flex-1">
        <span className="font-bold">Choose wisely:</span>
        <Button handleChoice={() => handleChoice("Rock")}>Rock</Button>
        <Button handleChoice={() => handleChoice("Paper")}>Paper</Button>
        <Button handleChoice={() => handleChoice("Scissors")}>Scissors</Button>
      </section>
      <section className="mb-8">
        <span>{isResultHidden ? "Your opponent is choosing..." : ('Computer chose: ' + cpuChoice)}</span>
      </section>
      <button className="bg-[#427AA1] m-2 w-24 text-white rounded hover:bg-blue-700 transition ease-in-out duration-300" onClick={() => getWinner()}>Go!</button>
      <section>
        <span className="text-xl">Result: {winner}</span>
      </section>
    </div>
  );
}
