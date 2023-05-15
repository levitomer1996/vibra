import React, { useContext, useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../Context/AuthContext";
import BottomTabs from "./BottomTabs";
import RegisterScreen from "../screens/RegisterScreen";
import SigninScreen from "../screens/SigninScreen";

const Stack = createStackNavigator();
export default function MainNavigation() {
  const { state } = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(state.isLogged);
  }, [state.isLogged]);

  return (
    <Stack.Navigator>
      {isLogged ? (
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
