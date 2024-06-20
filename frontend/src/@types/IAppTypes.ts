export interface ISelectedCity {
  lat: number;
  lng: number;
  address: string;
  results: Result[];
}

export interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  place_id: string;
  types: string[];
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface IGetDetailsResponse {
  weather: any;
  exchange: any;
  pibPerCapitalData: IBankApiResponse;
  populationData: IBankApiResponse;
}

export interface IData {
  indicator: {
    id: string;
    value: string;
  };
  country: {
    id: string;
    value: string;
  };
  countryiso3code: string;
  date: string;
  value?: number;
  unit: string;
  obs_status: string;
  decimal: number;
}
export interface IBankApiResponse {
  data: IData[];
}
