import Onboarding from "@/components/Onboarding";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signUp" options={{ title: "Create Account" }} />
      <Stack.Screen name="onBoard" options={{ title: "Onboarding" }} />
    </Stack>
  );
}
