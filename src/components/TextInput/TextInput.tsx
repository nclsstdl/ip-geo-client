import { UseFormRegister } from "react-hook-form";

interface TextInputProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
}

export function TextInput({ name, label, register }: TextInputProps) {
  return <input className="w-full" type="text" placeholder={label} {...register(name)} />;
}
