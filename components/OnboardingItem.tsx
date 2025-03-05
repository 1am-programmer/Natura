import React from "react";
import { FlatList, Text, View, Image, useWindowDimensions } from "react-native";
import slide from "@/slide";

function OnboardingItem({ item }: any) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width }}>
      <Image
        source={item.image}
        style={{
          width,
          resizeMode: "contain",
          flex: 0.7,
          justifyContent: "center",
        }}
      />

      <View style={{ flex: 0.3 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            marginBottom: 10,
            color: "#493d8a",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: "#62656b",
            textAlign: "center",
            paddingHorizontal: 64,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
}

export default OnboardingItem;
