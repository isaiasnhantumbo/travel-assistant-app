import { api } from '../services/apiClient';

export interface ISignInBody {
  email: string;
  password: string;
}

export interface ISignInResponse {
  user: {
    id: string;
    email: string;
    password: string;
  };
  token: string;
}

export async function login(requestBody: ISignInBody) {
  const { data } = await api.post<ISignInResponse>(`auth/login`, {
    ...requestBody,
  });
  if (data.token)
    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
  return data;
}
