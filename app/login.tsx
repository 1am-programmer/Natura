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

const login = () => {
  return (
    <SafeAreaView style={ScreenStyling}>
      <View>
        <Text style={headingStyling}>Welcome back</Text>
        <Text style={subHeading}>Please input your email and password</Text>

        <View style={{ flex: 1 }}>
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
              Login
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
            <Text style={subHeading}>Don&apos;t have an account? </Text>
            <TouchableOpacity>
              <Link href={"/signUp"}>
                <Text style={authText}>Sign up</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
