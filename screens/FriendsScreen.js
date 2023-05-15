import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import SearchBar from "../components/SearchBar";

export default function FriendsScreen() {
  const [friendsSearch, setFriendsSearch] = useState("");
  return (
    <SafeAreaView>
      <SearchBar
        placeholder={"Search for people"}
        setValue={setFriendsSearch}
        value={friendsSearch}
      />
    </SafeAreaView>
  );
}
