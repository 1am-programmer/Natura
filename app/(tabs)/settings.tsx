import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { ScreenStyling, settingNavs } from "@/constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const settingRoute = [
  {
    id: 1,
    icon: <FontAwesome name="home" size={24} color={"#81017F"} />,
    name: "Address",
    path: "/(setting)/address" as any,
    openIcon: <FontAwesome size={24} name="chevron-right" color={"#81017F"} />,
  },
  {
    id: 2,
    icon: <FontAwesome name="paypal" size={24} color={"#81017F"} />,
    name: "Payment",
    path: "/(setting)/payment" as any,
    openIcon: <FontAwesome size={24} name="chevron-right" color={"#81017F"} />,
  },
  {
    id: 3,
    icon: <FontAwesome name="language" size={24} color={"#81017F"} />,
    name: "Language",
    path: "/(setting)/language" as any,
    openIcon: <FontAwesome size={24} name="chevron-right" color={"#81017F"} />,
  },

  {
    id: 4,
    icon: <FontAwesome name="info-circle" size={24} color={"#81017F"} />,
    name: "About",
    path: "/(setting)/about" as any,
    openIcon: <FontAwesome size={24} name="chevron-right" color={"#81017F"} />,
  },
];

export default function Setting() {
  const userName = "Daniel Cee";
  const userEmail = "daniel@gmail.com";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{}}>
        <Text>{userName}</Text>
        <Text>{userEmail}</Text>
      </View>

      <View style={ScreenStyling}>
        <View style={settingNavs}>
          {settingRoute.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              style={{
                borderWidth: 1,
                padding: 25,
                borderColor: "#81017F",
                borderRadius: 5,
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {item.icon}
                  <Text>{item.name}</Text>
                </View>

                {item.openIcon}
              </View>
            </Link>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
