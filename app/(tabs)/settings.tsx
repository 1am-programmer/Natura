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
  const user = {
    name: "Daniel",
    email: "daniel@gmail.com",
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ImageBackground
        source={require("@/assets/images/settinghero.png")} // Ensure it's a valid image format
        style={{
          width: "100%",
          height: 100,
          justifyContent: "center",
          paddingHorizontal: 15,
          position: "relative",
        }}
      >
        {/* Overlay Color */}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#81017F",
            opacity: 0.8,
          }}
        />

        {/* User Info & Navigation Link */}
        <Link
          href={"/(setting)/editProfile"}
          style={
            {
              // position: "absolute",
              //  display: "flex",
              // flexDirection: "row",
              // alignItems: "center",
              // width: "100%",
              // justifyContent: "space-between",
              // paddingHorizontal: 25,
            }
          }
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#81017F" }}
                >
                  {user.name.charAt(0)}
                </Text>
              </View>

              <View>
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                >
                  {user.name}
                </Text>
                <Text style={{ color: "#fff", fontSize: 16 }}>
                  {user.email}
                </Text>
              </View>
            </View>

            <View style={{ paddingHorizontal: 25 }}>
              <FontAwesome
                name="chevron-circle-right"
                size={24}
                color="white"
              />
            </View>
          </View>
        </Link>
      </ImageBackground>

      {/* Settings Section */}
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

      {/* Logout Button */}
      <View
        style={{
          padding: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,  
        }}
      >
        <FontAwesome name="sign-out" size={22} color="#81017F" />
        <Text>Logout</Text>
      </View>
    </SafeAreaView>
  );
}
