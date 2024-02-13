import Link from "next/link";
import { ForgotPasswordTypography } from "./forgot-password.styles";

const ForgotPassword = () => {
  return (
    <Link href="#">
      <ForgotPasswordTypography>
        ¿Olvidaste tu contraseña?
      </ForgotPasswordTypography>
    </Link>
  );
};

export default ForgotPassword;
