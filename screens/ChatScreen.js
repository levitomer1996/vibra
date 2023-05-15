import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ChatList from "../components/Chat/ChatList";

export default function ChatScreen() {
  return (
    <SafeAreaView>
      <ChatList />
    </SafeAreaView>
  );
}
