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
import {
  ScreenStyling,
  settingLinks,
  settingNavs,
  settingText,
} from "@/constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const settingRoute = [
  {
    icon: <FontAwesome name="home" size={24} color={"#81017F"} />,
    name: "Address",
    path: "/(setting)/address" as any,
    open: (
      <FontAwesome size={32} name="arrow-circle-o-right" color={"#81017F"} />
    ),
  },
  {
    icon: <FontAwesome name="paypal" size={24} color={"#81017F"} />,
    name: "Payment",
    path: "/(setting)/payment" as any,
    open: (
      <FontAwesome size={32} name="arrow-circle-o-right" color={"#81017F"} />
    ),
  },
  {
    icon: <FontAwesome name="language" size={24} color={"#81017F"} />,
    name: "Language",
    path: "/(setting)/language" as any,
    open: (
      <FontAwesome size={32} name="arrow-circle-o-right" color={"#81017F"} />
    ),
  },

  {
    icon: <FontAwesome name="info-circle" size={24} color={"#81017F"} />,
    name: "About",
    path: "/(setting)/about" as any,
    open: (
      <FontAwesome size={32} name="arrow-circle-o-right" color={"#81017F"} />
    ),
  },
];

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#81017F",
    opacity: 0.5,
  },
});

export default function Setting() {
  const userName = "Daniel Cee";
  const userEmail = "daniel@gmail.com";

  return (
    <SafeAreaView>
      <View style={{}}>
        {/* <ImageBackground
          source={require("@/assets/images/onboard.svg")} // Ensure correct path
          style={styles.background}
        >
          <View style={styles.overlay} />
        </ImageBackground> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <View>
            <Text>{userName}</Text>
            <Text>{userEmail}</Text>
          </View>
          <TouchableOpacity>
            <Link href={"/(setting)/editProfile"} style={settingLinks}>
              <FontAwesome
                size={32}
                name="arrow-circle-o-right"
                color={"#fff"}
              />
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ScreenStyling}>
        <View style={settingNavs}>
          {settingRoute.map((item) => (
            <TouchableOpacity>
              <Link key={item.name} href={item.path} style={settingLinks}>
                <Text style={settingText}>
                  {item.icon}
                  {item.name}
                </Text>
                {item.open}
              </Link>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
