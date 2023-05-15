import React, { useContext, useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../Context/AuthContext";
import BottomTabs from "./BottomTabs";
import RegisterScreen from "../screens/RegisterScreen";
import SigninScreen from "../screens/SigninScreen";
import getItemFromStorage from "../Helpers/getToken";
import vibraServer from "../api/vibra-server";
import getToken from "../Helpers/getToken";

const Stack = createStackNavigator();

export default function MainNavigation() {
  const { state, login, logout } = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState(false);
  const initSignin = async () => {
    try {
      const token = await getToken();

      if (token) {
        const res = await vibraServer.get("/auth/getuser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        login(res.data);
      }
      setIsLogged(state.isLogged);
    } catch (error) {
      logout();
    }
  };
  useEffect(() => {
    initSignin();
  }, []);

  return (
    <Stack.Navigator>
      {state.isLogged ? (
        <Stack.Screen
          name="tab"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="SigninScreen"
            component={SigninScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
