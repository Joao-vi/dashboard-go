import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  "E-mail": string;
  Senha: string;
  "Nome completo": string;
  "Confirmar senha": string;
}
interface InputProps extends ChackraInputProps {
  label: Path<IFormValues>;
  id: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: FieldError;
}

export function Input({
  register,
  label,
  id,
  type,
  required,
  error,
  ...rest
}: InputProps) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <ChackraInput // Input
        id={id}
        size="md"
        variant="filled"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        _hover={{
          bgColor: "gray.900",
        }}
        type={type}
        {...register(label, { required })}
        {...rest}
      />

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
