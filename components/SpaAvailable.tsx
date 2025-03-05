import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { buttonStyling, ScreenStyling } from "@/constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BookingTabs from "@/components/BookingTabs";

export default function SpaAvailable() {
  const spaName = "Daniel Cee";

  return (
    <SafeAreaView style={ScreenStyling}>
      <View style={{ position: "relative" }}>
        {/* Image */}
        <Image
          source={require("@/assets/images/booking.png")}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />

        <View
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FontAwesome name="chevron-left" size={24} color="white" />

          <View style={{ flexDirection: "row", gap: 15 }}>
            <FontAwesome name="heart" size={24} color="white" />
            <FontAwesome name="shopping-cart" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: "#51004F",
            fontWeight: "700",
            fontSize: 25,
          }}
        >
          {spaName}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          {/* Star icons */}
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star-half-full" size={18} color="#FFD700" />
        </View>
      </View>

      <Text style={{ paddingHorizontal: 10, color: "gray", fontSize: 16 }}>
        Last Booked: {new Date().toLocaleDateString()}{" "}
      </Text>

      <BookingTabs />

      <TouchableOpacity
        style={{
          background: "linear-gradient(to right, #F5B7CA, #A83F98, #81017F)",
          padding: 10,
          borderRadius: 10,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Book now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
