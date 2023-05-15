import { Avatar, ListItem } from "@rneui/base";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

const ChatList = () => {
  const data = [
    {
      id: "1",
      name: "John Doe",
      message: "Hi, how are you?",
      avatar: "https://picsum.photos/64",
    },
    {
      id: "2",
      name: "Jane Doe",
      message: "I'm good, thanks! How about you?",
      avatar: "https://picsum.photos/64",
    },
    {
      id: "3",
      name: "John Doe",
      message: "I'm doing pretty well too. Thanks for asking!",
      avatar: "https://picsum.photos/64",
    },
    {
      id: "4",
      name: "Jane Doe",
      message: "Glad to hear it!",
      avatar: "https://picsum.photos/64",
    },
  ];

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.avatar }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <>
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: "person-outline",
            type: "material",
            size: 26,
          }}
          containerStyle={{ backgroundColor: "#c2c2c2" }}
        />
        <ListItem.Content>
          <ListItem.Title>Alba King</ListItem.Title>
          <ListItem.Subtitle>Vice President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Avatar
          rounded
          title="A"
          containerStyle={{ backgroundColor: "grey" }}
        />
        <ListItem.Content>
          <ListItem.Title>Adam Eva</ListItem.Title>
          <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatList;
