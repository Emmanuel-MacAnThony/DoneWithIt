import colors from "./colors";
import { Platform } from "react-native";

export default {
  text: {
    color: colors.medium,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
