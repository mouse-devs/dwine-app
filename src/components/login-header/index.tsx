import Typography from "@mui/material/Typography";
import Image from "next/image";

import {
  BrandContainer,
  LoginHeaderContainer,
  Subtitle,
} from "./login-header.styles";

const LoginHeader = () => {
  return (
    <LoginHeaderContainer>
      <Subtitle>
        <Typography
          component="h3"
          sx={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          ¡Bienvenido a dWine! 👋🏻
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: 14,
            color: "text.secondary",
          }}
        >
          Por favor, inicia sesión en tu cuenta y comienza las pruebas
        </Typography>
      </Subtitle>
    </LoginHeaderContainer>
  );
};

export default LoginHeader;
