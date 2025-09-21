import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonCard({
  showAvatar = true,
  showTitle = true,
  showSubtitle = true,
  showContent = true,
  className = "",
}) {
  return (
    <View className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
      <View className="flex-row items-start">
        {showAvatar && (
          <Skeleton width={48} height={48} borderRadius={24} className="mr-4" />
        )}

        <View className="flex-1">
          {showTitle && <Skeleton height={20} width="80%" className="mb-2" />}

          {showSubtitle && (
            <Skeleton height={16} width="60%" className="mb-3" />
          )}

          {showContent && (
            <View>
              <Skeleton height={16} width="100%" className="mb-2" />
              <Skeleton height={16} width="90%" className="mb-2" />
              <Skeleton height={16} width="75%" />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}








