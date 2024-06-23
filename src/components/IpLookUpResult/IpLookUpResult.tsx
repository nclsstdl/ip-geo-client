import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useIpGeoLookUpQuery } from "../../hooks/useIpGeoLookUpQuery";
import { useApplicationContext } from "../../providers/ContextProvider";
import { Card } from "../Card/Card";
import "./IpLookUpResult.css";

type IpLookUpResultProps = {
  className?: string;
};

export function IpLookUpResult({ className }: IpLookUpResultProps) {
  const {
    state: { selectedIp },
  } = useApplicationContext();

  const { data, isLoading, error } = useIpGeoLookUpQuery(selectedIp);

  if (error) {
    return (
      <Card className={className}>
        <p className="text-red-700">{error.message}</p>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="h-[192px] flex items-center justify-center">
        <AiOutlineLoading3Quarters size="80px" style={{ transform: "rotate(90deg)" }} />
      </Card>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Card className={className} header="Geo-Informationen gefunden!">
      <p className="mb-3 text-sm">
        Folgende Informationen konnten für die Ip-Adresse <span className="font-semibold">{data.ip}</span> gefunden
        werden.
      </p>
      <table className="text-sm">
        <tbody>
          <tr>
            <td>Country</td>
            <td>{data.country}</td>
          </tr>
          <tr>
            <td>Region</td>
            <td>
              {data.regionName} ({data.region})
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>{data.city}</td>
          </tr>
          <tr>
            <td>Zip</td>
            <td>{data.zip}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
