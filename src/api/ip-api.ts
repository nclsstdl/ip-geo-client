import axios from "axios";
import { GeoInformationResponse } from "./interfaces/geo-information-response.interface";

export async function getGeoInformationByIp(ip: string) {
  const { data } = await axios.get<GeoInformationResponse>(`http://localhost:3000/api/ip/${ip}/geo`);

  return data;
}
