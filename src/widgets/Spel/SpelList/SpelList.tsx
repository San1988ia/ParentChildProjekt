import { useState } from "react";
import SpelItem from "../SpelItem/SpelItem";
import "./SpelList.scss";


export default function SpelList() {
  const [SpelList, setSpelList] = useState<string[]>([
    "Poker",
    "Yatzy",
    "Alfapet",
    "Memory",
    "Vem där",
  ]);

  const deleteSpelList = (index: number) => {
    setSpelList(SpelList.filter((_, i) => i !== index));
  };

  const resetSpelList = () => {
    setSpelList(["Poker", "Yatzy", "Alfapet", "Memory", "Vem där"]);
  };

  return (
    <div className="SpelList">
      <h2>Olika Spel</h2>
      <ul>
        {SpelList.map((spel, index) => (
          <SpelItem
            key={`${index}-${spel}`}
            index={index}
            spel={spel}
            deleteSpelList={deleteSpelList}
          />
        ))}
      </ul>
      <button title="Reset" onClick={resetSpelList}>
        Återställ listan
      </button>
    </div>
  );
}
