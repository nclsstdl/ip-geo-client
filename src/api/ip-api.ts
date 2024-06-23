import axios from "axios";
import { GeoInformationResponse } from "./interfaces/geo-information-response.interface";

export async function getGeoInformationByIp(ip: string) {
  const { data } = await axios.get<GeoInformationResponse>(`${process.env.REACT_APP_API_URL}/api/ip/${ip}/geo`);

  return data;
}
