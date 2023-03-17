import { useState } from "react";
import { getUsers } from "../api";
import { UserParamsDTO } from "../api/dto";
import { mapDTOToUser } from "../api/mappers";
import { User } from "../entities/user";

type UserParams = UserParamsDTO;

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userParams, setUserParams] = useState<UserParams>({});

  async function fetchUsers(params?: UserParams) {
    try {
      const usersDTO = await getUsers(params);
      setUsers(usersDTO.map(mapDTOToUser));
    } catch (error) {
      console.error(error);
    }
  }

  function searchUser(search: string) {
    setUserParams({ search });
  }

  function sortUsers(sortBy: string, sortOrder: boolean) {
    setUserParams({ sortBy, sortOrder });
  }

  return { users, userParams, fetchUsers, searchUser, sortUsers };
};
