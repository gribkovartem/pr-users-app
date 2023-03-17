import { FC, SyntheticEvent, useState } from "react";
import classes from "./search-input.module.css";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchInput: FC<Props> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: SyntheticEvent<HTMLInputElement>) => {
    setSearchValue((e.target as HTMLInputElement).value);
    onSearch((e.target as HTMLInputElement).value);
  };

  return (
    <input
      className={classes.input}
      type="text"
      placeholder="Поиск"
      value={searchValue}
      onChange={handleSearch}
    />
  );
};
