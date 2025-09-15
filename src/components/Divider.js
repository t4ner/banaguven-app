import React from "react";
import { View, Text } from "react-native";

export default function Divider({
  text,
  color = "#E5E7EB",
  textColor = "#6B7280",
  className = "",
}) {
  if (text) {
    return (
      <View className={`flex-row items-center my-4 ${className}`}>
        <View className="flex-1 h-px" style={{ backgroundColor: color }} />
        <Text className="mx-4 text-sm" style={{ color: textColor }}>
          {text}
        </Text>
        <View className="flex-1 h-px" style={{ backgroundColor: color }} />
      </View>
    );
  }

  return (
    <View className={`h-px ${className}`} style={{ backgroundColor: color }} />
  );
}






