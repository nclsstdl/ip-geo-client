import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { z } from "zod";
import { useApplicationContext } from "../../providers/ContextProvider";
import { Card } from "../Card/Card";
import { IconButton } from "../IconButton/IconButton";
import { TextInput } from "../TextInput/TextInput";

const schema = z.object({
  ip: z.string().min(1, "Bitte eine Ip-Adresse eingeben").ip("Bitte eine gültige Ip-Adresse eingeben"),
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
    dispatch({ type: "setSelectedIp", payload: values.ip });
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
