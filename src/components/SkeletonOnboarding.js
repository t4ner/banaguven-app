import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonOnboarding({ className = "" }) {
  return (
    <View className={className}>
      {/* Image */}
      <Skeleton width="100%" height={300} borderRadius={0} className="mb-6" />

      {/* Content */}
      <View className="px-6">
        <Skeleton height={32} width="80%" className="mb-4" />
        <Skeleton height={20} width="100%" className="mb-2" />
        <Skeleton height={20} width="90%" className="mb-2" />
        <Skeleton height={20} width="75%" className="mb-8" />

        {/* Buttons */}
        <View className="flex-row justify-between">
          <Skeleton height={48} width="40%" borderRadius={24} />
          <Skeleton height={48} width="40%" borderRadius={24} />
        </View>
      </View>
    </View>
  );
}


