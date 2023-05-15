import { Button, Input } from "@rneui/base";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ElementDropDown from "../components/ElementDropDown";
import languges from "../components/languges";
import { Text } from "react-native-paper";
import SignupCredentials from "../DTO/SignupCredentials";
import ProgressBar from "../components/ProgressBar";
import vibra from "../api/vibra-server";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [f_name, setFullName] = useState("");
  const [languge_speak, setLSpeak] = useState("");
  const [languge_learn, setLLearn] = useState("");
  const [progress, setProgress] = useState(false);

  const handleRegister = async () => {
    const dto = {
      email,
      password,
      f_name,
      languge_learn: [languge_learn],
      languge_speak: [languge_speak],
    };
    try {
      setProgress(true);
      await vibra.post("auth/signup", dto);
      setProgress(false);
      navigation.navigate("SigninScreen");
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
      <Input
        placeholder="Full name"
        value={f_name}
        onChangeText={setFullName}
      />
      <Text>What language would you like to learn?</Text>
      <ElementDropDown
        title={"Select Languge"}
        list={languges}
        setValue={setLLearn}
        value={languge_learn}
      />
      <Text>What do you speak?</Text>
      <ElementDropDown
        title={"Select Languge"}
        list={languges}
        setValue={setLSpeak}
        value={languge_speak}
      />
      <Button title="Register" onPress={handleRegister} style={styles.button} />
      <TouchableOpacity onPress={() => navigation.navigate("SigninScreen")}>
        <Text style={{ color: "blue" }}>Already have a user? Signin here</Text>
      </TouchableOpacity>
      <ProgressBar isShow={progress} />
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

export default RegisterScreen;
