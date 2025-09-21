import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Timeline({ items, className = "" }) {
  return (
    <View className={`${className}`}>
      {items.map((item, index) => (
        <View key={item.key} className="flex-row">
          {/* Timeline Line */}
          <View className="items-center mr-4">
            <View
              className={`w-8 h-8 rounded-full items-center justify-center ${
                item.completed ? "bg-green-500" : "bg-blue-600"
              }`}
            >
              {item.completed ? (
                <Ionicons name="checkmark" size={16} color="white" />
              ) : (
                <Text className="text-white text-sm font-semibold">
                  {index + 1}
                </Text>
              )}
            </View>

            {index < items.length - 1 && (
              <View className="w-px h-16 bg-gray-300 mt-2" />
            )}
          </View>

          {/* Content */}
          <View className="flex-1 pb-8">
            <Text className="text-gray-800 font-semibold mb-1">
              {item.title}
            </Text>
            {item.description && (
              <Text className="text-gray-600 text-sm mb-2">
                {item.description}
              </Text>
            )}
            {item.date && (
              <Text className="text-gray-500 text-xs">{item.date}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}








