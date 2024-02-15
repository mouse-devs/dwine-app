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
import Link from "next/link";

const LoginFooter = () => {
  return (
    <Box>
      <NewAccountContainer>
        <NewAccountTextTypography>
          ¿Nuevo en nuestra plataforma?
        </NewAccountTextTypography>
        <Link href="#">
          <NewAccountLinkTypography>Creá una cuenta</NewAccountLinkTypography>
        </Link>
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
