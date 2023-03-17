export type UserDTO = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  createdAt: string;
};

export type UserParamsDTO = {
  search?: string;
  sortBy?: string;
  sortOrder?: boolean;
};
