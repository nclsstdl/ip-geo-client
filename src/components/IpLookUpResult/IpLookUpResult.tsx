import { useIpGeoLookUpQuery } from "../../hooks/useIpGeoLookUpQuery";
import { useApplicationContext } from "../../providers/ContextProvider";
import { Card } from "../Card/Card";

type IpLookUpResultProps = {
  className?: string;
};

export function IpLookUpResult({ className }: IpLookUpResultProps) {
  const {
    state: { selectedIp },
  } = useApplicationContext();

  const { data, isLoading, error } = useIpGeoLookUpQuery(selectedIp);

  if (isLoading) {
    return (
      <Card className={className}>
        <p>Loading...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <p>{error.message}</p>
      </Card>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Card className={className}>
      <p>{data.country}</p>
    </Card>
  );
}
