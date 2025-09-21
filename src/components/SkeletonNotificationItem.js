import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonNotificationItem({ className = "" }) {
  return (
    <View className={`bg-white rounded-lg p-4 mb-3 shadow-sm ${className}`}>
      <View className="flex-row items-start">
        <Skeleton width={40} height={40} borderRadius={20} className="mr-3" />

        <View className="flex-1">
          <Skeleton height={16} width="80%" className="mb-2" />
          <Skeleton height={14} width="100%" className="mb-2" />
          <Skeleton height={14} width="60%" />
        </View>
      </View>
    </View>
  );
}








