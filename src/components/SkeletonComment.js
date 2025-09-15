import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonComment({ className = "" }) {
  return (
    <View className={className}>
      {Array.from({ length: 4 }, (_, index) => (
        <View key={index} className="flex-row mb-4">
          <Skeleton width={32} height={32} borderRadius={16} className="mr-3" />
          <View className="flex-1">
            <Skeleton height={14} width="40%" className="mb-2" />
            <Skeleton height={16} width="100%" className="mb-1" />
            <Skeleton height={16} width="80%" className="mb-2" />
            <Skeleton height={12} width="30%" />
          </View>
        </View>
      ))}
    </View>
  );
}






