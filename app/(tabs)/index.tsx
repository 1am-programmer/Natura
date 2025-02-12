import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { ScreenStyling } from "@/constants/Styles";

export default function HomeScreen() {
  return (
    <View style={ScreenStyling}>
      <Link href={"/signUp"}>Sign up</Link>

      <Link href={"/login"}>Login</Link>
    </View>
  );
}
