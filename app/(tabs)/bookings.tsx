import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  buttonStyling,
  headingStyling,
  ScreenStyling,
  subHeading,
} from "@/constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BookingTabs from "@/components/BookingTabs";

export default function Bookings() {
  const spaName = "Daniel Cee";

  return (
    <SafeAreaView style={ScreenStyling}>
      <Text>Bookings</Text>

      <View>Upcoming</View>
      <View>Past</View>
      <View>
        <Text>Empty</Text>
        <Text style={headingStyling}>You haven&apos;t booked yet</Text>
        <Text style={subHeading}>
          You don&apos;t have any upcoming bookings to display
        </Text>
      </View>

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
