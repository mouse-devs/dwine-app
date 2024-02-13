import {
  HeaderContainer,
  LoginSubtitle,
  LoginTitle,
} from "./login-header.styles";

const LoginHeader = () => {
  return (
    <HeaderContainer>
      <LoginTitle>¡Bienvenido a dWine! 👋🏻</LoginTitle>
      <LoginSubtitle>
        Por favor, inicia sesión en tu cuenta y comienza las pruebas
      </LoginSubtitle>
    </HeaderContainer>
  );
};

export default LoginHeader;
