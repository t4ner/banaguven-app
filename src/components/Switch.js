import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Switch({
  value,
  onValueChange,
  label,
  description,
  disabled = false,
  className = "",
}) {
  return (
    <View className={`flex-row items-center justify-between py-3 ${className}`}>
      <View className="flex-1">
        {label && <Text className="text-gray-800 font-medium">{label}</Text>}
        {description && (
          <Text className="text-gray-600 text-sm mt-1">{description}</Text>
        )}
      </View>

      <TouchableOpacity
        className={`w-12 h-6 rounded-full p-1 ${
          value ? "bg-blue-600" : "bg-gray-300"
        } ${disabled ? "opacity-50" : ""}`}
        onPress={() => !disabled && onValueChange(!value)}
        disabled={disabled}
      >
        <View
          className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
            value ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </TouchableOpacity>
    </View>
  );
}






