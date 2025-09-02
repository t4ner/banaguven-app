import React from "react";
import { View, Text } from "react-native";

export default function ProgressBar({
  progress, // 0-100
  height = 8,
  color = "#3B82F6",
  backgroundColor = "#E5E7EB",
  showPercentage = false,
  className = "",
}) {
  const percentage = Math.min(Math.max(progress, 0), 100);

  return (
    <View className={`${className}`}>
      <View
        className="rounded-full overflow-hidden"
        style={{ height, backgroundColor }}
      >
        <View
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </View>

      {showPercentage && (
        <Text className="text-gray-600 text-sm mt-1 text-center">
          {Math.round(percentage)}%
        </Text>
      )}
    </View>
  );
}


