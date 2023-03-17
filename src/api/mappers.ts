import { User } from "../entities/user";
import { UserDTO } from "./dto";

export function mapDTOToUser({ createdAt, ...rest }: UserDTO): User {
  return rest;
}
