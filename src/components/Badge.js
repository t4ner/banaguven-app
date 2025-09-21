import React from "react";
import { View, Text } from "react-native";

export default function Badge({
  children,
  variant = "default", // default, success, warning, danger, info
  size = "medium", // small, medium, large
  className = "",
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "danger":
        return "bg-red-100 text-red-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-xs";
      case "medium":
        return "px-3 py-1 text-sm";
      case "large":
        return "px-4 py-2 text-base";
      default:
        return "px-3 py-1 text-sm";
    }
  };

  return (
    <View
      className={`rounded-full ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      <Text className={`font-medium ${getVariantStyles().split(" ")[1]}`}>
        {children}
      </Text>
    </View>
  );
}








