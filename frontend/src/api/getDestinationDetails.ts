import { api } from '../services/apiClient';

export interface getDestinationDetailsParams {
  latitude: number;
  longitude: number;
  countryZone: string;
}

export async function getDestinationDetails({
  latitude,
  longitude,
  countryZone,
}: getDestinationDetailsParams) {
  const { data } = await api.get(
    `cities/details?latitude=${latitude}&longitude=${longitude}&country=${countryZone}`
  );
  return data;
}
