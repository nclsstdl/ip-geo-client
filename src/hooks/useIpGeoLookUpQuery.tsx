import { skipToken, useQuery } from "@tanstack/react-query";
import { getGeoInformationByIp } from "../api/ip-api";
import { GeoInformationResponse } from "../api/interfaces/geo-information-response.interface";
import { AxiosError } from "axios";

export function useIpGeoLookUpQuery(ip: string | undefined) {
  return useQuery<GeoInformationResponse, AxiosError<string>>({
    queryKey: ["geolocation", ip],
    queryFn: ip ? () => getGeoInformationByIp(ip) : skipToken,
    retry: false,
  });
}
