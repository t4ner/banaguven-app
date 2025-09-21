import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonSuccess({ className = "" }) {
  return (
    <View className={`items-center py-12 ${className}`}>
      <Skeleton width={64} height={64} borderRadius={32} className="mb-4" />
      <Skeleton height={24} width="70%" className="mb-2" />
      <Skeleton height={16} width="90%" className="mb-4" />
      <Skeleton height={40} width={140} borderRadius={20} />
    </View>
  );
}








