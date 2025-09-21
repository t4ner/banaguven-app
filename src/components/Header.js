import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({
  title,
  subtitle,
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
  showBackButton = false,
  onBackPress,
  className = "",
}) {
  return (
    <View className={`bg-white px-6 py-4 shadow-sm ${className}`}>
      <View className="flex-row items-center">
        {/* Left Side */}
        <View className="flex-row items-center">
          {showBackButton && (
            <TouchableOpacity className="mr-3" onPress={onBackPress}>
              <Ionicons name="arrow-back" size={24} color="#374151" />
            </TouchableOpacity>
          )}

          {leftIcon && (
            <TouchableOpacity className="mr-3" onPress={onLeftPress}>
              {leftIcon}
            </TouchableOpacity>
          )}
        </View>

        {/* Center */}
        <View className="flex-1">
          {title && (
            <Text className="text-xl font-bold text-gray-800">{title}</Text>
          )}
          {subtitle && (
            <Text className="text-gray-600 text-sm">{subtitle}</Text>
          )}
        </View>

        {/* Right Side */}
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}








