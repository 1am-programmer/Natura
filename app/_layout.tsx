import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadApp() {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading
      setIsReady(true);
      await SplashScreen.hideAsync();
    }

    loadApp();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("@/assets/images/Splash.png")}
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signUp" options={{ title: "Create Account" }} />
      <Stack.Screen name="onBoard" options={{ title: "Onboarding" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232323",
  },
  splashImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
