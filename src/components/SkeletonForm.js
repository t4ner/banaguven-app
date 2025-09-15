import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonForm({
  fields = 4,
  showLabels = true,
  showButtons = true,
  className = "",
}) {
  return (
    <View className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
      {Array.from({ length: fields }, (_, index) => (
        <View key={index} className={index < fields - 1 ? "mb-4" : ""}>
          {showLabels && <Skeleton height={16} width="30%" className="mb-2" />}

          <Skeleton height={48} width="100%" borderRadius={8} />
        </View>
      ))}

      {showButtons && (
        <View className="flex-row justify-end mt-6">
          <Skeleton height={40} width={100} borderRadius={8} className="mr-3" />
          <Skeleton height={40} width={100} borderRadius={8} />
        </View>
      )}
    </View>
  );
}






