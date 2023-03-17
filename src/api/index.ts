import { UserDTO, UserParamsDTO } from "./dto";

function mockParamsProcess(users: UserDTO[], params?: UserParamsDTO) {
  if (params?.search) {
    return users.filter(
      (user) =>
        !user.firstName
          .toLocaleLowerCase()
          .indexOf(params.search?.toLowerCase()) ||
        !user.lastName.toLocaleLowerCase().indexOf(params.search?.toLowerCase())
    );
  }

  if (params?.sortBy !== undefined && params?.sortOrder !== undefined) {
    return users.sort((prev, next) => {
      if (params?.sortOrder) {
        return prev[params.sortBy] > next[params.sortBy] ? 1 : -1;
      } else {
        return prev[params.sortBy] > next[params.sortBy] ? -1 : 1;
      }
    });
  }

  return users;
}

export function getUsers(params?: UserParamsDTO): Promise<UserDTO[]> {
  return fetch("/mock-data.json").then((data) =>
    data.json().then((data) => mockParamsProcess(data, params))
  );
}
