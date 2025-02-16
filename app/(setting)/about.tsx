import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { ScreenStyling } from "@/constants/Styles";

export default function About() {
  return (
    <SafeAreaView style={ScreenStyling}>
      <Text>About</Text>
    </SafeAreaView>
  );
}
