/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { IGetDetailsResponse, ISelectedCity } from '../@types/IAppTypes';
import {
  getDestinationDetails,
  getDestinationDetailsParams,
} from '../api/getDestinationDetails';
import { getWeatherPreview } from '../api/getWeather';
import { ISignInBody, login } from '../api/login';
import { signUp } from '../api/signUp';
import { SignUpForm } from '../pages/auth/SignUp';

interface SharedProviderProps {
  children: ReactNode;
}

interface SharedContextData {
  onGetWeather: (data: any) => Promise<void>;
  onSignIn: (data: ISignInBody) => Promise<boolean>;
  onSignUp: (data: SignUpForm) => Promise<boolean>;
  selectedCity: any;
  onSelectCity: any;
  shared: IGetDetailsResponse;
  isLoggedIn: boolean;
}

const SharedContext = createContext<SharedContextData>({} as SharedContextData);

export function SharedProvider({ children }: SharedProviderProps) {
  const [shared, setShared] = useState<IGetDetailsResponse>();
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [country, setCountry] = useState('');
  async function onGetWeather(data: getDestinationDetailsParams) {
    try {
      if (isLoggedIn) {
        const responseData = await getDestinationDetails(data);
        console.log({ responseData });

        setShared(responseData);
      } else {
        const responseData = (await getWeatherPreview(
          data
        )) as IGetDetailsResponse;
        console.log({ responseData });

        setShared(responseData);
      }
    } catch (error) {
      console.log({ error });
    }
  }
  async function onSelectCity(data: ISelectedCity) {
    try {
      console.log({ data });
      setSelectedCity(data.address);
      data.results[0].address_components.forEach((result) => {
        const resultWithCountryCode = result.types.find(
          (currentType) => currentType === 'country'
        );
        if (resultWithCountryCode) {
          console.log({ result });
          setCountry(result.short_name);
          onGetWeather({
            countryZone: result.short_name,
            latitude: data.lat,
            longitude: data.lng,
          });
        }
      });
    } catch (error) {
      console.log({ error });
    }
  }
  async function onSignIn(data: ISignInBody) {
    try {
      const responseData = await login(data);
      console.log({ responseData });
      setIsLoggedIn(true);
      setShared(responseData);
      return true;
    } catch (error) {
      return false;
    }
  }
  async function onSignUp(data: SignUpForm) {
    try {
      const responseData = await signUp(data);
      console.log({ responseData });

      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <SharedContext.Provider
      value={{
        selectedCity,
        onSelectCity,
        onGetWeather,
        isLoggedIn,
        onSignIn,
        onSignUp,
        shared,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
}

export function useSharedData() {
  const context = useContext(SharedContext);

  return context;
}
