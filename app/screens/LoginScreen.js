import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErroMessage,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const { logIn } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    try {
      const result = await authApi.login(email, password);
      if (!result.ok) {
        return setLoginFailed(true);
      }
      setLoginFailed(false);
      logIn(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <>
          <ErroMessage
            error={"Invalid email and/or password"}
            visible={loginFailed}
          />
          <AppFormField
            name={"email"}
            placeholder="Email"
            icon={"email"}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            placeholder="Password"
            icon={"lock"}
            name={"password"}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title={"Login"} />
        </>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
