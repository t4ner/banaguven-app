import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Checkbox({
  checked,
  onPress,
  label,
  description,
  disabled = false,
  className = "",
}) {
  return (
    <TouchableOpacity
      className={`flex-row items-start py-2 ${className}`}
      onPress={() => !disabled && onPress(!checked)}
      disabled={disabled}
    >
      <View
        className={`w-6 h-6 rounded border-2 items-center justify-center mr-3 mt-0.5 ${
          checked ? "bg-blue-600 border-blue-600" : "border-gray-300"
        } ${disabled ? "opacity-50" : ""}`}
      >
        {checked && <Ionicons name="checkmark" size={16} color="white" />}
      </View>

      <View className="flex-1">
        {label && (
          <Text className={`text-gray-800 ${disabled ? "opacity-50" : ""}`}>
            {label}
          </Text>
        )}
        {description && (
          <Text
            className={`text-gray-600 text-sm mt-1 ${disabled ? "opacity-50" : ""}`}
          >
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}


