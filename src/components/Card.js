import React from "react";
import { View, TouchableOpacity } from "react-native";

export default function Card({
  children,
  onPress,
  className = "",
  shadow = true,
}) {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      className={`
        bg-white rounded-lg p-4
        ${shadow ? "shadow-sm" : ""}
        ${className}
      `}
      onPress={onPress}
    >
      {children}
    </CardComponent>
  );
}








