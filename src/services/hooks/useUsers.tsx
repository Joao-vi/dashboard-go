import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type UserAxios = {
  users: [
    {
      id: string;
      name: string;
      email: string;
      createdAt: string;
    }
  ];
};
type GetUserResponse = {
  users: User[];
  totalCount: number;
};
export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get<UserAxios>("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);
  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString(),
    };
  });
  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), { staleTime: 5000 });
}
