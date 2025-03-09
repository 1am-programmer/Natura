import { buttonStyling, ScreenStyling } from "@/constants/Styles";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const bookings: {
  id: string;
  bookingId: string;
  date: string;
  practitioner: string;
  status: string;
  amount: string;
}[] = [];

const bookingFields = [
  { key: "bookingId", label: "Booking ID", icon: "ticket" },
  { key: "date", label: "Booking Date", icon: "calendar" },
  { key: "practitioner", label: "Practitioner", icon: "user-md" },
  { key: "status", label: "Status", icon: "check-circle" },
  { key: "amount", label: "Total Amount", icon: "dollar" },
] as const;

const BookingCard = ({ item }: { item: (typeof bookings)[0] }) => (
  <View style={styles.card}>
    <FlatList
      data={bookingFields}
      numColumns={2}
      keyExtractor={(field) => field.key}
      renderItem={({ item: field, index }) => (
        <View style={[styles.fieldContainer, index === 4 && { flex: 1 }]}>
          <FontAwesome name={field.icon} size={20} color="black" />
          <View>
            <Text style={styles.label}>{field.label}</Text>
            <Text>{item[field.key]}</Text>
          </View>
        </View>
      )}
    />
  </View>
);

const UpcomingBookings = () => {
  return (
    <SafeAreaView style={ScreenStyling}>
      {bookings.length === 0 ? (
        <View style={{ alignItems: "center", paddingHorizontal: 15 }}>
          <Image source={require("@/assets/images/skeleton-loader.png")} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginTop: -35,
              color: "#81017F",
            }}
          >
            You haven&apos;t booked yet
          </Text>
          <Text style={{ padding: 5 }}>
            You don&apos;t have any upcoming bookings to display
          </Text>

          <LinearGradient
            colors={["#F5B7CA", "#A83F98", "#81017F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                }}
              >
                Book Now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookingCard item={item} />}
          contentContainerStyle={{ padding: 15 }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 20,
    backgroundColor: "#E6E6FA",
    borderRadius: 10,
    marginBottom: 15,
  },
  fieldContainer: {
    flex: 0.5,
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  label: {
    color: "gray",
    fontSize: 13,
  },
});

export default UpcomingBookings;
