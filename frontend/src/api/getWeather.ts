import { api } from '../services/apiClient';

export interface getWeatherParams {
  latitude: number;
  longitude: number;
}

export async function getWeatherPreview({
  latitude,
  longitude,
}: getWeatherParams) {
  const { data } = await api.get(
    `/cities/preview?latitude=${latitude}&longitude=${longitude}`
  );
  return data;
}
