import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../Hooks/useTheme";
import AppText from "../AppText";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



const AppIcon = React.forwardRef(
  (
    {
      background,
      color,
      size = 24,
      name,
      icon,
      label,
      style,
      labelStyle,
      onPress,
      containerSize,
      containerRadius,
      imageSource,
      isClickable,
      imageBorderRadius,
      onLayout,
    }: TProps,
    ref
  ) => {
    const { mode, currentTheme, setMode } = useTheme();
    const _style = styleGenerator(currentTheme, size);
    const coreImage = (
      <View ref={ref as any} onLayout={onLayout} style={[_style.iconImage, style]}>
        {icon && (
          <FontAwesomeIcon
            color={color || currentTheme.colors.primary}
            size={size}
            icon={icon}
          />
        )}
        {imageSource && (
          <Image
            style={{
              borderRadius: imageBorderRadius,
              width: size,
              height: size,
              resizeMode: "contain",
            }}
            source={imageSource}
          />
        )}
        {label && <AppText style={labelStyle}>{label}</AppText>}
      </View>
    );
    return isClickable ? (
      <TouchableOpacity onPress={onPress}>{coreImage}</TouchableOpacity>
    ) : (
      coreImage
    );
  }
);

const styleGenerator = (props: any, size: number) =>
  StyleSheet.create({
    iconImage: {
      width: size,
      height: size,
      borderRadius: size,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default AppIcon;

type TProps = {
  background?: any,
  color?: any,
  size?: any,
  name?: any,
  icon?: any,
  label?: any,
  style?: any,
  labelStyle?: any,
  onPress?: any,
  containerSize?: any,
  containerRadius?: any,
  imageSource?: any,
  isClickable?: any,
  imageBorderRadius?: any,
  onLayout?: any,
}
