import PhoneNumber from "@/components/PhoneNumber";
import {
  authText,
  buttonStyling,
  formText,
  headingStyling,
  importantField,
  InputStyling,
  ScreenStyling,
  subHeading,
} from "@/constants/Styles";
import { Link } from "expo-router";
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
        <Text style={headingStyling}>You&apos;re here !</Text>
        <Text style={subHeading}>
          Please fill in your details to get started
        </Text>

        <View style={{ flex: 1, paddingHorizontal: 5 }}>
          <View>
            <Text style={formText}>
              First Name
              <Text style={importantField}>*</Text>
            </Text>
            <TextInput
              style={InputStyling}
              placeholder="Natura"
              placeholderTextColor={"gray"}
            />
          </View>

          <View>
            <Text style={formText}>
              Last Name
              <Text style={importantField}>*</Text>
            </Text>
            <TextInput
              style={InputStyling}
              placeholder="Natura"
              placeholderTextColor={"gray"}
            />
          </View>

          <View>
            <Text style={formText}>
              E-mail
              <Text style={importantField}>*</Text>
            </Text>
            <TextInput
              style={InputStyling}
              placeholder="Natura**@gmail.com"
              placeholderTextColor={"gray"}
            />
          </View>

          <View>
            <Text style={formText}>
              Password
              <Text style={importantField}>*</Text>
            </Text>
            <TextInput
              style={InputStyling}
              placeholder="N4**a"
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

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Text style={subHeading}>Already have an account? </Text>
            <Link href={"/login"}>
              <Text style={authText}>Login</Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
