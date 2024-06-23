import { GeoInformationResponse } from "../interfaces/geo-information-response.interface";

export type ApplicationState = {
  geoInformation: GeoInformationResponse | undefined;
  isLoading: boolean;
  error?: string;
};

export const INITIAL_STATE: ApplicationState = { geoInformation: undefined, isLoading: false, error: undefined };

export type Action =
  | { type: "setGeoInformation"; payload: GeoInformationResponse }
  | { type: "setIsLoading"; payload: boolean }
  | { type: "setError"; payload: string | undefined };

export function reducer(prevState: ApplicationState, action: Action): ApplicationState {
  const nextState = structuredClone(prevState);

  switch (action.type) {
    case "setGeoInformation": {
      return {
        ...nextState,
        geoInformation: action.payload,
        error: undefined,
      };
    }
    case "setIsLoading": {
      return {
        ...nextState,
        isLoading: action.payload,
      };
    }
    case "setError": {
      return {
        ...nextState,
        error: action.payload,
        geoInformation: undefined,
      };
    }
    default: {
      return { ...nextState };
    }
  }
}
