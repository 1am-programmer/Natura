import {
  authText,
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
import { LinearGradient } from "expo-linear-gradient";

const login = () => {
  return (
    <SafeAreaView style={ScreenStyling}>
      <View>
        <Text style={headingStyling}>Welcome back</Text>
        <Text style={subHeading}>Please input your email and password</Text>

        <View style={{ flex: 1, paddingHorizontal: 5 }}>
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
                Login
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Text style={subHeading}>Don&apos;t have an account? </Text>
            <Link href={"/signUp"}>
              <Text style={authText}>Sign up</Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
