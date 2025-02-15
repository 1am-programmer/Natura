import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { ScreenStyling } from "@/constants/Styles";

export default function Index() {
  return (
    <SafeAreaView style={ScreenStyling}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
