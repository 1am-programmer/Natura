import {
  bodyText,
  buttonStyling,
  headingStyling,
  InputStyling,
  ScreenStyling,
} from "@/constants/Styles";
import React from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const Signup = () => {
  return (
    <SafeAreaView style={ScreenStyling}>
      <View>
        <Text
          style={{
            color: "#51004F",
            fontWeight: 700,
            fontSize: 25,
            textAlign: "center",
            padding: 10,
          }}
        >
          Hey, Welcome.
        </Text>
        <Text style={bodyText}>Please confirm your Name and mobile number</Text>

        <View style={{}}>
          <View>
            <TextInput
              style={InputStyling}
              placeholder="First Name"
              placeholderTextColor={"gray"}
            />

            <TextInput
              style={InputStyling}
              placeholder="Last Name"
              placeholderTextColor={"gray"}
            />
          </View>

          <TouchableOpacity style={buttonStyling}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
