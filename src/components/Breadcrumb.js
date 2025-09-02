import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Breadcrumb({
  items,
  onItemPress,
  separator = "chevron-forward",
  className = "",
}) {
  return (
    <View className={`flex-row items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.key}>
          <TouchableOpacity
            onPress={() => onItemPress && onItemPress(item)}
            disabled={index === items.length - 1}
          >
            <Text
              className={`text-sm ${
                index === items.length - 1
                  ? "text-gray-800 font-medium"
                  : "text-blue-600"
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>

          {index < items.length - 1 && (
            <Ionicons
              name={separator}
              size={16}
              color="#6B7280"
              style={{ marginHorizontal: 8 }}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}


