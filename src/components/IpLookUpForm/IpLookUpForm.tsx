import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { z } from "zod";
import { getGeoInformationByIp } from "../../api/ip-api";
import { useApplicationContext } from "../../providers/ContextProvider";
import { Card } from "../Card/Card";
import { IconButton } from "../IconButton/IconButton";
import { TextInput } from "../TextInput/TextInput";
import { isError } from "../../utils/is-error.util";

const schema = z.object({
  ip: z.string().min(1, "foo bar baz"),
});

type SchemaProps = z.infer<typeof schema>;

export function IpLookUpForm() {
  const { dispatch } = useApplicationContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProps>({ resolver: zodResolver(schema) });

  const submitForm = async (values: SchemaProps) => {
    dispatch({ type: "setIsLoading", payload: true });
    try {
      const geoInformation = await getGeoInformationByIp(values.ip);

      dispatch({ type: "setGeoInformation", payload: geoInformation });
    } catch (error) {
      if (isError(error)) {
        dispatch({ type: "setError", payload: error.message });
      } else {
        dispatch({ type: "setError", payload: JSON.stringify(error) });
      }
    } finally {
      dispatch({ type: "setIsLoading", payload: false });
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <TextInput label="Ip-Adresse" name="ip" register={register} />
            {/* <input type="text" placeholder="Ip-Adresse" {...register("ip")} /> */}
            {errors?.ip && <small className="text-red-700">{errors.ip.message}</small>}
          </div>
          <IconButton type="submit" icon={<FaSearch />} />
        </div>
      </form>
    </Card>
  );
}
