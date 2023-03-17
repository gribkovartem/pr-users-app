import { FC, useState } from "react";
import { User } from "../../entities/user";
import classes from "./users-table.module.css";

interface Props {
  users: User[];
  onSort: (sortBy: string, sortOrder: boolean) => void;
}

export const UsersTable: FC<Props> = ({ users, onSort }) => {
  const [sortColumn, setSortColumn] = useState<Record<string, boolean>>();

  const handleSort = (name: string) => {
    if (!sortColumn) {
      setSortColumn({ [name]: true });
      onSort(name, true);

      return;
    }

    setSortColumn({ [name]: !sortColumn[name] });
    onSort(name, !sortColumn[name]);
  };

  return (
    <>
      <div className={classes.header}>
        <span onClick={() => handleSort("id")}>#</span>
        <span onClick={() => handleSort("firstName")}>Имя</span>
        <span onClick={() => handleSort("lastName")}>Фамилия</span>
        <span onClick={() => handleSort("address")}>Адрес</span>
        <span onClick={() => handleSort("phone")}>Телефон</span>
      </div>
      {users.map((user) => (
        <div key={user.id} className={classes.row}>
          <span>{user.id}</span>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
          <span>{user.address}</span>
          <span>{user.phone}</span>
        </div>
      ))}
    </>
  );
};
