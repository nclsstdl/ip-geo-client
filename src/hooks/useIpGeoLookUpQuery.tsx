import { skipToken, useQuery } from "@tanstack/react-query";
import { getGeoInformationByIp } from "../api/ip-api";

export function useIpGeoLookUpQuery(ip: string | undefined) {
  return useQuery({
    queryKey: ["geolocation", ip],
    queryFn: ip ? () => getGeoInformationByIp(ip) : skipToken,
    retry: false,
  });
}
