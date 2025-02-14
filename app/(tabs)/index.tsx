import { Image, StyleSheet, Platform, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { ScreenStyling } from "@/constants/Styles";

export default function HomeScreen() {
  return <View style={ScreenStyling}>Home</View>;
}
// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { PaperProvider } from 'react-native-paper';
// import { name as appName } from './app.json';
// import App from './src/App';

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);
