import { useApplicationContext } from "../../providers/ContextProvider";
import { Card } from "../Card/Card";

type IpLookUpResultProps = {
  className?: string;
};

export function IpLookUpResult({ className }: IpLookUpResultProps) {
  const {
    state: { selectedIp },
  } = useApplicationContext();

  return (
    <Card className={className}>
      <p>Loading...</p>
    </Card>
  );
}
