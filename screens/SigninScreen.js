import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "@rneui/base";
import { Text } from "react-native-paper";
import vibraServer from "../api/vibra-server";
import { AuthContext } from "../Context/AuthContext";
import setStorage from "../Helpers/setStorage";
import getItemFromStorage from "../Helpers/getToken";
import getToken from "../Helpers/getToken";

const SigninScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(false);
  const handleSignin = async () => {
    try {
      setProgress(true);
      const res = await vibraServer.post("auth/signin", { email, password });
      await setStorage("token", res.data.token);

      login(res.data.user);
      setProgress(false);
    } catch (error) {
      setProgress(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={{ color: "blue" }}>
          Still don't have a user? Register now
        </Text>
      </TouchableOpacity>
      <Button title="Sign in" onPress={handleSignin} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
});

export default SigninScreen;
