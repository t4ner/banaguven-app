import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonFeed({ className = "" }) {
  return (
    <View className={className}>
      {Array.from({ length: 3 }, (_, index) => (
        <View key={index} className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          {/* Header */}
          <View className="flex-row items-center mb-4">
            <Skeleton
              width={40}
              height={40}
              borderRadius={20}
              className="mr-3"
            />
            <View className="flex-1">
              <Skeleton height={16} width="60%" className="mb-1" />
              <Skeleton height={14} width="40%" />
            </View>
          </View>

          {/* Content */}
          <Skeleton height={16} width="100%" className="mb-2" />
          <Skeleton height={16} width="90%" className="mb-2" />
          <Skeleton height={16} width="75%" className="mb-4" />

          {/* Image */}
          <Skeleton
            height={200}
            width="100%"
            borderRadius={8}
            className="mb-4"
          />

          {/* Actions */}
          <View className="flex-row justify-between">
            <Skeleton height={32} width={80} borderRadius={16} />
            <Skeleton height={32} width={80} borderRadius={16} />
            <Skeleton height={32} width={80} borderRadius={16} />
          </View>
        </View>
      ))}
    </View>
  );
}








