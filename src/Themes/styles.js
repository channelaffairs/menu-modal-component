import { Platform } from "react-native";
import { black } from "./colors";

export default {
  text: {
    color: black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
