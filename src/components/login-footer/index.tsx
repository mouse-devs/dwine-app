import Image from "next/image";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import {
  LogoContainer,
  LogoTypography,
  NewAccountContainer,
  NewAccountLinkTypography,
  NewAccountTextTypography,
} from "./login-footer.styles";

const LoginFooter = () => {
  return (
    <Box>
      <NewAccountContainer>
        <NewAccountTextTypography>
          ¿Nuevo en nuestra plataforma?
        </NewAccountTextTypography>
        <NewAccountLinkTypography>Crea una cuenta</NewAccountLinkTypography>
      </NewAccountContainer>
      <Divider />
      <LogoContainer>
        <Image
          src="/dwine-iso-dark.svg"
          width={30}
          height={30}
          alt="dWine Logo"
        />
        <LogoTypography>dWine</LogoTypography>
      </LogoContainer>
    </Box>
  );
};

export default LoginFooter;
