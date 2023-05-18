import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import HorrizontalFriend from "../components/Friends/HorrizontalFriend";

export default function FriendsScreen() {
  const [friendsSearch, setFriendsSearch] = useState("");
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <SafeAreaView>
      <SearchBar
        placeholder={"Search for people"}
        setValue={setFriendsSearch}
        value={friendsSearch}
      />
      <HorrizontalFriend data={data} />
    </SafeAreaView>
  );
}
