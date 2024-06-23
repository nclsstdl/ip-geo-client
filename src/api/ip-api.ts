import axios from "axios";

export async function getGeoInformationByIp(ip: string) {
  const { data } = await axios.get(`http://localhost:3000/ip/${ip}/geo`);

  return data;
}
