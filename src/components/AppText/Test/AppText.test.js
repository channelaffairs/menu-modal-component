// import AppButton from "../AppButton";
// import { Text } from "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
// import AppText from "..";
import { DefaultText } from "./AppText.stories";

test("should render", async () => {
  render(<DefaultText>Test</DefaultText>);
});
