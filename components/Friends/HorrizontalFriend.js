import React from "react";
import { View, FlatList, Text } from "react-native";

import SuggestFriendCard from "./SuggestFriendCard";

const HorrizontalFriend = ({ data, title }) => {
  return (
    <>
      <Text>{title}</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item }) => <SuggestFriendCard />}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default HorrizontalFriend;
