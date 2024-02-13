"use client";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Divider, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="body2" color="primary.main">
          ¿Olvidaste tu contraseña?
        </Typography>
      </Box>
      <Box
        sx={{
          my: 1,
        }}
      >
        <LoadingButton
          fullWidth
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </LoadingButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          ¿Nuevo en nuestra plataforma?
        </Typography>
        <Typography variant="body2" color="primary.main">
          Crea una cuenta
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Image
          src="/dwine-iso-dark.svg"
          width={30}
          height={30}
          alt="dWine Logo"
        />
        <Typography
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: 20,
            color: "primary.main",
          }}
        >
          dWine
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
