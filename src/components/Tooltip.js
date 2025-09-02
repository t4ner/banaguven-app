import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Tooltip({
  children,
  text,
  position = "top", // top, bottom, left, right
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return "bottom-full mb-2";
      case "bottom":
        return "top-full mt-2";
      case "left":
        return "right-full mr-2";
      case "right":
        return "left-full ml-2";
      default:
        return "bottom-full mb-2";
    }
  };

  const getArrowStyles = () => {
    switch (position) {
      case "top":
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800";
      case "bottom":
        return "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800";
      case "left":
        return "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800";
      case "right":
        return "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800";
      default:
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800";
    }
  };

  return (
    <View className={`relative ${className}`}>
      <TouchableOpacity
        onPressIn={() => setVisible(true)}
        onPressOut={() => setVisible(false)}
      >
        {children}
      </TouchableOpacity>

      {visible && (
        <View className={`absolute ${getPositionStyles()} z-50`}>
          <View className="bg-gray-800 rounded-lg px-3 py-2">
            <Text className="text-white text-sm">{text}</Text>
          </View>
          <View className={`absolute w-0 h-0 border-4 ${getArrowStyles()}`} />
        </View>
      )}
    </View>
  );
}


