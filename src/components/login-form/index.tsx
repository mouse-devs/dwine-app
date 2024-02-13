"use client";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "@mui/material/TextField";

import ForgotPassword from "../forgot-password";

import { AppLoginButton, LoginContainer } from "./login-form.styles";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string }) =>
    console.log(data);

  return (
    <LoginContainer>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Usuario"
            type="email"
            // TODO: Manage global errors
            // error={!!errors.email}
            // helperText={errors.email?.message ? errors.email.message : " "}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Contraseña"
            type="password"
            // TODO: Manage global errors
            // error={!!errors.password}
            // helperText={
            //   errors.password?.message ? errors.password.message : " "
            // }
          />
        )}
      />
      <ForgotPassword />
      <AppLoginButton
        fullWidth
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </AppLoginButton>
    </LoginContainer>
  );
};

export default LoginForm;
