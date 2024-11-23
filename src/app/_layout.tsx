import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/utils/Constants";
import { Stack } from "expo-router";

const Root = () => {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={Colors.tertiary}
        translucent={false}
      />
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default Root;
