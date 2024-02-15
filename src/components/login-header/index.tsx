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
        Por favor, iniciá sesión en tu cuenta y comenzá las pruebas
      </LoginSubtitle>
    </HeaderContainer>
  );
};

export default LoginHeader;
