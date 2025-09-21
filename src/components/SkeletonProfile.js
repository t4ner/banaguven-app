import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonProfile({
  showAvatar = true,
  showName = true,
  showBio = true,
  showStats = true,
  className = "",
}) {
  return (
    <View className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <View className="items-center">
        {showAvatar && (
          <Skeleton width={96} height={96} borderRadius={48} className="mb-4" />
        )}

        {showName && <Skeleton height={24} width="60%" className="mb-2" />}

        {showBio && (
          <View className="w-full">
            <Skeleton height={16} width="100%" className="mb-2" />
            <Skeleton height={16} width="80%" className="mb-2" />
            <Skeleton height={16} width="90%" />
          </View>
        )}

        {showStats && (
          <View className="flex-row justify-around w-full mt-6">
            {Array.from({ length: 3 }, (_, index) => (
              <View key={index} className="items-center">
                <Skeleton height={20} width={40} className="mb-1" />
                <Skeleton height={14} width={60} />
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}








