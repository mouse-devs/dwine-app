"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

import LoginHeader from "../login-header";
import LoginForm from "../login-form";
import LoginFooter from "../login-footer";

import {
  LoginCard,
  LoginCardContent,
  LoginContainer,
  MobileLoginContainer,
} from "./app-login.styles";

const AppLogin = () => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <LoginContainer isXs={isXs}>
      {isXs ? (
        <MobileLoginContainer>
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </MobileLoginContainer>
      ) : (
        <LoginCard>
          <LoginCardContent>
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
          </LoginCardContent>
        </LoginCard>
      )}
    </LoginContainer>
  );
};

export default AppLogin;
