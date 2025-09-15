import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonDashboard({ className = "" }) {
  return (
    <View className={className}>
      {/* Header */}
      <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <View className="flex-row items-center">
          <Skeleton width={48} height={48} borderRadius={24} className="mr-3" />
          <View className="flex-1">
            <Skeleton height={20} width="60%" className="mb-2" />
            <Skeleton height={16} width="40%" />
          </View>
        </View>
      </View>

      {/* Stats */}
      <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <Skeleton height={18} width="40%" className="mb-3" />
        <View className="flex-row justify-around">
          {Array.from({ length: 3 }, (_, index) => (
            <View key={index} className="items-center">
              <Skeleton height={24} width={40} className="mb-1" />
              <Skeleton height={14} width={60} />
            </View>
          ))}
        </View>
      </View>

      {/* Quick Actions */}
      <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <Skeleton height={18} width="50%" className="mb-3" />
        <View className="flex-row flex-wrap justify-between">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton
              key={index}
              width="48%"
              height={80}
              borderRadius={8}
              className="mb-3"
            />
          ))}
        </View>
      </View>

      {/* Recent Activity */}
      <View className="bg-white rounded-lg p-4 shadow-sm">
        <Skeleton height={18} width="45%" className="mb-3" />
        {Array.from({ length: 3 }, (_, index) => (
          <View key={index} className="flex-row items-center py-2">
            <Skeleton width={8} height={8} borderRadius={4} className="mr-3" />
            <Skeleton height={14} width="80%" />
          </View>
        ))}
      </View>
    </View>
  );
}






