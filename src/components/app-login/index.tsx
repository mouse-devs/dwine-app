import LoginHeader from "../login-header";
import LoginForm from "../login-form";
import LoginFooter from "../login-footer";

import {
  LoginCard,
  LoginCardContent,
  LoginContainer,
} from "./app-login.styles";

const AppLogin = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <LoginCardContent>
          test
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </LoginCardContent>
      </LoginCard>
    </LoginContainer>
  );
};

export default AppLogin;
