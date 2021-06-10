import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextStyle, StyleProp } from "react-native";
import { useTheme } from "../../Hooks/useTheme";
import AppIcon from "../AppIcon";

function AppText({
  children,
  style,
  color,
  fontWeight,
  width,
  textAlign,
  iconSize,
  preventTranslation,
  rightIcon,
  leftIcon,
  wrapperStyle,
  onLeftIconPress,
  onRightIconPress,
  isClickable,
  onPress,
  ...props
}: TProps) {
  const { currentTheme } = useTheme();
  const { t } = useTranslation();
  const styles = generateStyles(currentTheme, fontWeight, color, isClickable);
  const coreTextComponent = (
    <View
      style={[
        styles.container,
        wrapperStyle,
        {
          cursor: isClickable && "pointer",
        },
      ]}
    >
      {leftIcon && (
        <AppIcon
          style={{ alignSelf: "center", marginRight: 5 }}
          size={iconSize}
          icon={leftIcon}
          color={color}
          isClickable={onLeftIconPress ? true : false}
          onPress={onLeftIconPress}
        />
      )}
      <Text
        {...props}
        style={[
          styles.text,
          style,
          // {
          //   fontSize: size,
          //   width: width,
          //   color: color || currentTheme?.theme?.font_color,
          // },
        ]}
      >
        {preventTranslation ? children : t(children)}
      </Text>
      {rightIcon && (
        <AppIcon
          style={{ alignSelf: "center", marginLeft: 5 }}
          size={iconSize}
          icon={rightIcon}
          color={color}
          isClickable={onRightIconPress ? true : false}
          onPress={onRightIconPress}
        />
      )}
    </View>
  );
  return isClickable ? (
    <TouchableWithoutFeedback onPress={onPress}>
      {coreTextComponent}
    </TouchableWithoutFeedback>
  ) : (
    coreTextComponent
  );
}
const generateStyles = (props: any, weight: number, color: string, isClickable: boolean) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      alignContent: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
    },

    text: {
      // fontFamily: weight ? "bold" : "normal", <==== Here you have an error it should be FontWeight, that's why I put a string below
      fontWeight: weight ? "bold" : "normal",
      color: color || props?.theme?.font_color,
      // ...Platform.select({
      //   ios: {
      //     fontSize: 18,
      //     fontFamily: "Avenir",
      //   },
      //   android: {
      //     fontSize: 18,
      //     fontFamily: "Roboto",
      //   },
      // }),
    },
  });
};

export default AppText;

type TProps = {
  children?: any,
  style?: StyleProp<TextStyle>,
  color?: any,
  fontWeight?: any,
  width?: number,
  textAlign?: any,
  iconSize?: number,
  preventTranslation?: any,
  rightIcon?: any,
  leftIcon?: any,
  wrapperStyle?: any,
  onLeftIconPress?: any,
  onRightIconPress?: any,
  isClickable?: any,
  onPress?: any,
  // ...props
}
