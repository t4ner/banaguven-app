import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonLoading({ className = "" }) {
  return (
    <View className={`items-center py-12 ${className}`}>
      <Skeleton width={48} height={48} borderRadius={24} className="mb-4" />
      <Skeleton height={20} width="50%" className="mb-2" />
      <Skeleton height={16} width="70%" />
    </View>
  );
}








