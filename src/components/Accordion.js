import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Accordion({
  title,
  children,
  defaultExpanded = false,
  className = "",
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View className={`bg-white rounded-lg shadow-sm ${className}`}>
      <TouchableOpacity
        className="flex-row items-center justify-between p-4"
        onPress={() => setExpanded(!expanded)}
      >
        <Text className="text-gray-800 font-medium flex-1">{title}</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="#6B7280"
        />
      </TouchableOpacity>

      {expanded && <View className="px-4 pb-4">{children}</View>}
    </View>
  );
}


