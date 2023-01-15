import { useState } from "react";
import styles from "./styles.module.css";

interface SearchProps {
  onSearch: (value: string) => void;
  placeHolder: string;
}

export function Search({ onSearch, placeHolder }: SearchProps) {
  const [value, setValue] = useState("");

  function handleClick() {
    onSearch(value);
    setValue("");
  }

  const disable = value.length < 1;

  return (
    <div className={styles.Container}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
      />
      <button
        className={styles.Button}
        onClick={handleClick}
        disabled={disable}
      >
        Buscar
      </button>
    </div>
  );
}
