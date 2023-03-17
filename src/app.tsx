import { useEffect } from "react";
import { SearchInput, UsersTable } from "./components";
import { useUser } from "./use-cases/use-user";

function App() {
  const { users, userParams, fetchUsers, searchUser, sortUsers } = useUser();

  const handleSearch = (value: string) => {
    searchUser(value);
  };

  const handleSort = (sortBy: string, sortOrder: boolean) => {
    sortUsers(sortBy, sortOrder);
  };

  useEffect(() => {
    fetchUsers(userParams);
  }, [userParams]);

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <UsersTable users={users} onSort={handleSort} />
    </div>
  );
}

export default App;
