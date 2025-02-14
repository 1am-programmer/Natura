import {
  bodyText,
  buttonStyling,
  headingStyling,
  InputStyling,
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
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 10,
      }}
    >
      <View>
        <Text
          style={{
            color: "#51004F",
            fontWeight: 700,
            fontSize: 25,
            textAlign: "center",
            padding: 1,
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
