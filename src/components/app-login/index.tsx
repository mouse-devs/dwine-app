import { Card, CardContent, CardHeader } from "@mui/material";
import { LoginContainer } from "./app-login.styles";
import LoginHeader from "../login-header";
import LoginForm from "../login-form";

const AppLogin = () => {
  return (
    <LoginContainer>
      <Card sx={{ maxWidth: 450, px: 2 }}>
        {/* <CardHeader title={<LoginHeader />} /> */}
        <CardContent>
          <LoginHeader />
          <LoginForm />
        </CardContent>
      </Card>
    </LoginContainer>
  );
};

export default AppLogin;
