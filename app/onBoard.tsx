import { Image, StyleSheet, Platform, View, SafeAreaView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { ScreenStyling } from "@/constants/Styles";

export default function Onboarding() {
  return <SafeAreaView style={ScreenStyling}>Onboarding screen</SafeAreaView>;
}
