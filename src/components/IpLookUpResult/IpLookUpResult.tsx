import { useApplicationContext } from "../../providers/ContextProvider";
import { Card } from "../Card/Card";

type IpLookUpResultProps = {
  className?: string;
};

export function IpLookUpResult({ className }: IpLookUpResultProps) {
  const {
    state: { isLoading, geoInformation, error },
  } = useApplicationContext();

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
        <p>{error}</p>
      </Card>
    );
  }

  if (!geoInformation) {
    return <></>;
  }

  return (
    <Card className={className} header={geoInformation.ip}>
      <p>{geoInformation.country}</p>
    </Card>
  );
}
