import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "@rneui/base";
import { Text } from "react-native-paper";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // Handle user signin here
    console.log("Signin user with email:", email, "and password:", password);
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
