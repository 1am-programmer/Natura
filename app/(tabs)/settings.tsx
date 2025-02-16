import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { ScreenStyling, settingLinks, settingNavs } from "@/constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const settingRoute = [
  {
    icon: <FontAwesome name="home" size={24} color="black" />,
    name: "Address",
    path: "/(setting)/address" as any,
    open: <FontAwesome size={28} name="arrow-right" color={"#81017F"} />,
  },
  {
    icon: <FontAwesome name="home" size={24} color="black" />,
    name: "Payment",
    path: "/(setting)/payment" as any,
    open: <FontAwesome size={28} name="arrow-right" color={"#81017F"} />,
  },
  {
    icon: <FontAwesome name="home" size={24} color="black" />,
    name: "Notification",
    path: "/(setting)/notification" as any,
    open: <FontAwesome size={28} name="arrow-right" color={"#81017F"} />,
  },

  {
    icon: <FontAwesome name="home" size={24} color="black" />,
    name: "About",
    path: "/(setting)/about" as any,
    open: <FontAwesome size={28} name="arrow-right" color={"#81017F"} />,
  },
];

export default function Setting() {
  return (
    <SafeAreaView style={ScreenStyling}>
      <View style={settingNavs}>
        {settingRoute.map((item) => (
          <TouchableOpacity>
            <Link key={item.name} href={item.path} style={settingLinks}>
              {item.icon}
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
              {item.open}
            </Link>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
