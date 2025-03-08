import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PastBookings from "../bookings/PastBookings";
import UpcomingBookings from "../bookings/Upcoming";

const Tab = createMaterialTopTabNavigator();

// const UpcomingBookings = () => {
//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <Text>Upcoming Bookings</Text>
//     </SafeAreaView>
//   );
// };

// const PastBookings = () => {
//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <Text>Past Bookings</Text>
//     </SafeAreaView>
//   );
// };

export default function Bookings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "white" },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          tabBarIndicatorStyle: { backgroundColor: "#81017F", height: 4 },
          tabBarActiveTintColor: "#81017F", // Selected tab text color
          tabBarInactiveTintColor: "gray", // Unselected tab text color
          // tabBarItemStyle: ({ focused }: any) => ({
          //   backgroundColor: focused ? "#A83F98" : "white",
          //   borderRadius: 10,
          //   marginHorizontal: 5,
          // }),
        })}
      >
        <Tab.Screen name="Upcoming" component={UpcomingBookings} />
        <Tab.Screen name="Past" component={PastBookings} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
