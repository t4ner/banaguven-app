import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmptyState({
  icon = "document-outline",
  title,
  message,
  actionTitle,
  onAction,
  className = "",
}) {
  return (
    <View className={`items-center py-12 px-6 ${className}`}>
      <Ionicons name={icon} size={64} color="#D1D5DB" />

      {title && (
        <Text className="text-gray-500 text-center mt-4 text-lg font-medium">
          {title}
        </Text>
      )}

      {message && (
        <Text className="text-gray-400 text-center text-sm mt-2">
          {message}
        </Text>
      )}

      {actionTitle && onAction && (
        <TouchableOpacity
          className="bg-blue-600 rounded-lg px-6 py-3 mt-6"
          onPress={onAction}
        >
          <Text className="text-white font-medium">{actionTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}


