import "./SpelItem.scss";

type SpelItemProps = {
  index: number;
  spel: string;
  deleteSpelList: (index: number) => void;
};

function SpelItem({ index, spel, deleteSpelList }: SpelItemProps) {
  return (
    <li>
      <span>{spel}</span>
      <button onClick={() => deleteSpelList(index)}>Radera</button>
    </li>
  );
}

export default SpelItem;
