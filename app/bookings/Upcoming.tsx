import { ScreenStyling } from "@/constants/Styles";
import { Text, SafeAreaView, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const bookings = [
  {
    id: "1",
    bookingId: "123456",
    date: "28-09-2003",
    practitioner: "Dr. John Doe",
    status: "Active",
    amount: "2000",
  },
  {
    id: "2",
    bookingId: "654321",
    date: "15-07-2024",
    practitioner: "Dr. Jane Smith",
    status: "Pending",
    amount: "1500",
  },
  {
    id: "3",
    bookingId: "789012",
    date: "03-03-2025",
    practitioner: "Dr. Emily Brown",
    status: "Completed",
    amount: "2500",
  },
  {
    id: "4",
    bookingId: "111222",
    date: "10-06-2023",
    practitioner: "Dr. Robert Wilson",
    status: "Cancelled",
    amount: "1800",
  },
  {
    id: "5",
    bookingId: "333444",
    date: "22-08-2022",
    practitioner: "Dr. Sarah Lee",
    status: "Active",
    amount: "2200",
  },
  {
    id: "6",
    bookingId: "555666",
    date: "05-12-2024",
    practitioner: "Dr. Michael Green",
    status: "Pending",
    amount: "2750",
  },
  {
    id: "7",
    bookingId: "777888",
    date: "18-02-2023",
    practitioner: "Dr. Olivia Martinez",
    status: "Completed",
    amount: "1900",
  },
  {
    id: "8",
    bookingId: "777998",
    date: "18-02-2023",
    practitioner: "Dr. Dan ",
    status: "Completed",
    amount: "9000",
  },
];

// Fields with labels and icons
const bookingFields = [
  { key: "bookingId", label: "Booking ID", icon: "ticket" },
  { key: "date", label: "Booking Date", icon: "calendar" },
  { key: "practitioner", label: "Practitioner", icon: "user-md" },
  { key: "status", label: "Status", icon: "check-circle" },
  { key: "amount", label: "Total Amount", icon: "dollar" },
] as const;

const BookingCard = ({ item }: { item: (typeof bookings)[0] }) => (
  <View
    style={{
      padding: 20,
      backgroundColor: "#E6E6FA",
      borderRadius: 10,
      marginBottom: 15,
    }}
  >
    <FlatList
      data={bookingFields}
      numColumns={2}
      keyExtractor={(field) => field.key}
      renderItem={({ item: field, index }) => (
        <View
          style={{
            flex: index === 4 ? 1 : 0.5,
            flexDirection: "row",
            gap: 10,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <FontAwesome name={field.icon} size={20} color="black" />
          <View>
            <Text style={{ color: "gray", fontSize: 13 }}>{field.label}</Text>
            <Text>{item[field.key as keyof typeof item]}</Text>
          </View>
        </View>
      )}
    />
  </View>
);

const UpcomingBookings = () => {
  return (
    <SafeAreaView style={{ padding: 15, backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookingCard item={item} />}
        contentContainerStyle={{ padding: 15 }}
      />
    </SafeAreaView>
  );
};

export default UpcomingBookings;
