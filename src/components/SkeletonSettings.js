import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonSettings({ className = "" }) {
  return (
    <View className={className}>
      {/* Profile Section */}
      <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <View className="items-center">
          <Skeleton width={80} height={80} borderRadius={40} className="mb-4" />
          <Skeleton height={20} width="60%" className="mb-2" />
          <Skeleton height={16} width="40%" />
        </View>
      </View>

      {/* Settings Sections */}
      {Array.from({ length: 3 }, (_, sectionIndex) => (
        <View
          key={sectionIndex}
          className="bg-white rounded-lg p-4 mb-4 shadow-sm"
        >
          <Skeleton height={18} width="30%" className="mb-3" />
          {Array.from({ length: 4 }, (_, itemIndex) => (
            <View key={itemIndex} className="flex-row items-center py-3">
              <Skeleton width={20} height={20} className="mr-3" />
              <View className="flex-1">
                <Skeleton height={16} width="70%" className="mb-1" />
                <Skeleton height={14} width="50%" />
              </View>
              <Skeleton width={16} height={16} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}






