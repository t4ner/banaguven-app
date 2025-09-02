import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonTable({
  rows = 5,
  columns = 4,
  showHeader = true,
  className = "",
}) {
  return (
    <View className={`bg-white rounded-lg shadow-sm ${className}`}>
      {showHeader && (
        <View className="flex-row p-4 border-b border-gray-200">
          {Array.from({ length: columns }, (_, index) => (
            <Skeleton
              key={index}
              height={16}
              width="100%"
              className={index < columns - 1 ? "mr-4" : ""}
            />
          ))}
        </View>
      )}

      {Array.from({ length: rows }, (_, rowIndex) => (
        <View key={rowIndex} className="flex-row p-4 border-b border-gray-100">
          {Array.from({ length: columns }, (_, colIndex) => (
            <Skeleton
              key={colIndex}
              height={14}
              width="100%"
              className={colIndex < columns - 1 ? "mr-4" : ""}
            />
          ))}
        </View>
      ))}
    </View>
  );
}


