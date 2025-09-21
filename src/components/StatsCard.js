import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconColor = "#3B82F6",
  onPress,
  className = "",
}) {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      className={`bg-white rounded-lg p-4 shadow-sm ${className}`}
      onPress={onPress}
    >
      <View className="flex-row items-center">
        {icon && (
          <View className="mr-3">
            <Ionicons name={icon} size={24} color={iconColor} />
          </View>
        )}

        <View className="flex-1">
          {title && <Text className="text-gray-600 text-sm mb-1">{title}</Text>}

          {value && (
            <Text className="text-2xl font-bold text-gray-800">{value}</Text>
          )}

          {subtitle && (
            <Text className="text-gray-500 text-xs mt-1">{subtitle}</Text>
          )}
        </View>
      </View>
    </CardComponent>
  );
}








