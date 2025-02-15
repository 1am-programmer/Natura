import { TextStyle } from "react-native";

export const headingStyling: TextStyle = {
  color: "#51004F",
  fontWeight: 700 as 700,
  fontSize: 25,
  textAlign: "center",
  padding: 10,
};

export const subHeading: TextStyle = {
  fontSize: 15,
  paddingVertical: 8,
  textAlign: "center", // Ensure this is a valid value
};

export const formText: TextStyle = {
  fontSize: 15,
  paddingTop: 10,
  fontWeight: 500,
};

export const importantField = { color: "red", marginLeft: 5 };
export const authText: TextStyle = {
  color: "#81017F",
  fontSize: 15,
  fontWeight: "500",
};

export const InputStyling = {
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: "gray",
  marginVertical: 10,
  // borderBottomWidth: 1,
  // borderTopWidth: 0,
  // borderLeftWidth: 0,
  // borderRightWidth: 0,
};

export const ScreenStyling = {
  backgroundColor: "white",
  flex: 1,
  padding: 20,
};

export const buttonStyling = {
  background: "linear-gradient(to right, #F5B7CA, #A83F98, #81017F)",
  flex: 1,
  padding: 10,
  borderRadius: 10,
  marginVertical: 5,
};
