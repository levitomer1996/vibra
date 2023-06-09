import React from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Avatar } from "@rneui/themed";

const users = [
  {
    name: "brynn",
    avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    name: "thot leader",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  },
  {
    name: "jsa",
    avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
  },
  {
    name: "talhaconcepts",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "andy vitale",
    avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
  },
  {
    name: "katy friedson",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
];

const SuggestFriendCard = () => {
  return (
    <>
      <Card style={styles.container}>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
        />
        <Card.Title>HELLO WORLD</Card.Title>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Add friend"
        />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "200px",
  },
});

export default SuggestFriendCard;
