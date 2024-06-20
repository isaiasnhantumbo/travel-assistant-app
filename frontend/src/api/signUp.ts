import { api } from '../services/apiClient';

export interface ISignUpBody {
  email: string;
  password: string;
}

export async function signUp(requestBody: ISignUpBody) {
  const { data } = await api.post(`users`, {
    ...requestBody,
  });
  return data;
}
