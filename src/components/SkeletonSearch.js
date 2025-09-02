import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonSearch({ className = "" }) {
  return (
    <View className={className}>
      {/* Search Bar */}
      <Skeleton height={48} width="100%" borderRadius={24} className="mb-4" />

      {/* Filters */}
      <View className="flex-row space-x-3 mb-4">
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton key={index} height={32} width={80} borderRadius={16} />
        ))}
      </View>

      {/* Results */}
      {Array.from({ length: 5 }, (_, index) => (
        <View key={index} className="bg-white rounded-lg p-4 mb-3 shadow-sm">
          <View className="flex-row items-center">
            <Skeleton
              width={48}
              height={48}
              borderRadius={24}
              className="mr-3"
            />
            <View className="flex-1">
              <Skeleton height={18} width="70%" className="mb-2" />
              <Skeleton height={14} width="50%" />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}


